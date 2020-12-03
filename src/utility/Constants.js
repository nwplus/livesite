export const DB_COLLECTION = 'Hackathons'
export const DB_HACKATHON = 'LHD2021'
export const FAQ_COLLECTION = 'FAQ'
export const NOTIFICATION_SETTINGS_CACHE_KEY = 'livesiteNotificationSettings'
export const NOTIFICATION_PERMISSIONS = Object.freeze({
  GRANTED: 'granted',
  DEFAULT: 'default',
  DENIED: 'denied',
})
export const DAYOF_COLLECTION = 'DayOf'
export const SCREEN_BREAKPOINTS = {
  xs: 576,
  mobile: 768,
  tablet: 992,
  desktop: 1200,
}
export const SOCIAL_LINKS = Object.freeze({
  FB: 'https://www.facebook.com/nwplusubc',
  IG: 'https://www.instagram.com/nwplusubc',
  MEDIUM: 'https://www.medium.com/nwplusubc',
  TW: 'https://www.twitter.com/nwplusubc',
  WEBSITE: 'https://www.nwplus.io',
})

export const RedirectStatus = Object.freeze({
  ApplicationNotSubmitted: 'ApplicationNotSubmitted',
  ApplicationSubmitted: 'ApplicationSubmitted',
  AttendingEvent: 'AttendingEvent',
})

export const ApplicationStatus = Object.freeze({
  applied: 'applied',
  accepted: 'accepted',
  rejected: 'rejected',
  waitlisted: 'waitlisted',
  inProgress: 'inProgress',
})

export const hackerApplicationTemplate = Object.freeze({
  _id: '',
  basicInfo: {
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    ethnicity: '',
    isOfLegalAge: false,
    phoneNumber: '',
    school: '',
    major: '',
    educationLevel: '',
    graduation: 0,
    hackathonsAttended: 0,
    contributionRole: '',
    location: '',
  },
  skills: {
    resume: '',
    portfolio: '',
    linkedin: '',
    github: '',
    longAnswers: {},
  },
  questionnaire: {
    engagementSource: '',
    eventsAttended: [],
  },
  submission: {
    lastUpdated: '',
    submitted: false,
  },
  status: {
    applicationStatus: 'inProgress',
    responded: false, // using responded and attending to check if they un-RSVPed or if they didn't RSVP at all (no RSVP)
    attending: false, // false for no-rsvp by default
  },
  team: '',
})
