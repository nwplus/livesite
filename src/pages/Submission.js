import React, { useEffect, useState } from 'react'
import { getLivesiteDoc, getUserApplication, getSubmission } from '../utility/firebase'
import ViewSubmission from '../containers/Submission'
import { useAuth } from '../utility/Auth'
import LinkSubmission from '../containers/SubmissionLink'

export default () => {
  const [isSubmissionsOpen, setIsSubmissionsOpen] = useState(false)
  const { user } = useAuth()
  const [submission, setSubmission] = useState()

  useEffect(() => {
    const unsubscribe = getLivesiteDoc(livesiteDoc =>
      setIsSubmissionsOpen(livesiteDoc.submissionsOpen)
    )
    return unsubscribe
  }, [setIsSubmissionsOpen])

  useEffect(() => {
    ;(async () => {
      const d = await getUserApplication(user.uid)
      const submittedProjectRef = d.submittedProject
      const submission = await getSubmission(submittedProjectRef)
      setSubmission(submission)
    })()
  }, [user])

  if (!isSubmissionsOpen) {
    return (
      <>
        <h2>Submissions are not open.</h2>
        <h2>Check back here later to submit your project!</h2>
      </>
    )
  }

  return !!submission ? <ViewSubmission user={user} /> : <LinkSubmission user={user} />
}
