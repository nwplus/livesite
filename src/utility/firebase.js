import firebase from 'firebase/app'
import 'firebase/firestore'
import {
  hackerApplicationTemplate,
  RedirectStatus,
  DB_COLLECTION,
  ApplicationStatus,
  DB_HACKATHON,
} from '../utility/Constants'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    measurementId: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  }
  firebase.initializeApp(config)
}

export const firestore = firebase.firestore
export const db = firebase.firestore()

export const livesiteDocRef = db.collection('InternalWebsites').doc('Livesite')
export const applicantsRef = db.collection(DB_COLLECTION).doc(DB_HACKATHON).collection('Applicants')
export const projectsRef = db.collection(DB_COLLECTION).doc(DB_HACKATHON).collection('Projects')

export const getLivesiteDoc = callback => {
  return livesiteDocRef.onSnapshot(doc => {
    callback(doc.data())
  })
}

export const getSponsors = () => {
  return db
    .collection(DB_COLLECTION)
    .doc(DB_HACKATHON)
    .collection('Sponsors')
    .get()
    .then(querySnapshot => {
      return querySnapshot.docs
    })
}

export const syncToFirebase = async (projects, setMessageCallback) => {
  // delete old projects
  setMessageCallback(`Snapping old projects...`)
  const snapshot = await projectsRef.get()

  const deleteBatch = db.batch()
  snapshot.docs.forEach(doc => {
    deleteBatch.delete(doc.ref)
  })
  await deleteBatch.commit()
  setMessageCallback(`Snapped!`)

  // insert new
  const insertBatch = firebase.firestore().batch()
  projects.forEach(p => {
    var docRef = projectsRef.doc()
    p.countAssigned = 0
    insertBatch.set(docRef, Object.assign({}, p))
  })

  setMessageCallback(`Inserting ${projects.length} new projects...`)
  await insertBatch.commit()
  setMessageCallback('Insert done!')
}

const createNewApplication = async user => {
  const userId = {
    _id: user.uid,
  }
  const basicInfo = user.displayName.contains(' ')
    ? {
        email: user.email,
        firstName: user?.displayName?.split(' ')[0] ?? '',
        lastName: user?.displayName?.split(' ')[1] ?? '',
      }
    : {
        email: user.email,
        firstName: user.displayName,
      }
  const submission = {
    submission: {
      lastUpdated: firebase.firestore.Timestamp.now(),
      submitted: false,
    },
  }

  // default values for p2p judging on portal
  const judging = {
    projectsAssigned: [],
    submittedProject: '',
  }

  const newApplication = {
    ...hackerApplicationTemplate,
    basicInfo: {
      ...hackerApplicationTemplate.basicInfo,
      ...basicInfo,
    },
    ...submission,
    ...userId,
    ...judging,
  }

  await applicantsRef.doc(user.uid).set(newApplication)
}

/**Extracts user status and redirect information for the user */
export const getUserStatus = async user => {
  let applicant = await applicantsRef.doc(user.uid).get()
  if (!applicant.exists) {
    await createNewApplication(user)
    applicant = await applicantsRef.doc(user.uid).get()
  }

  const status = applicant.data().status.applicationStatus

  if (applicant.data().status.attending) {
    return { redirect: RedirectStatus.AttendingEvent, status }
  }

  if (status === ApplicationStatus.inProgress) {
    return { redirect: RedirectStatus.ApplicationNotSubmitted, status }
  }
  /**All other status' go here. */
  return { redirect: RedirectStatus.ApplicationSubmitted, status }
}

export const getUserApplication = async uuid => {
  return (await applicantsRef.doc(uuid).get()).data()
}

export const getSubmission = async uid => {
  return (await projectsRef.doc(uid).get()).data()
}

export const updateUserApplication = async (uuid, newApp) => {
  return applicantsRef.doc(uuid).set(newApp)
}
