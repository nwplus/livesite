import React from 'react'
import Landing from '../../containers/Landing'
import { A } from '../../components/Typography'
import { SOCIAL_LINKS } from '../../utility/Constants'

export default () => (
  <Landing
    heading="Thanks for your interest in nwHacks 2021"
    description={
      <>
        We are no longer accepting applications, but we do hope to see you at our future events!
        Visit our site{' '}
        <A bolded color="primary" href={SOCIAL_LINKS.WEBSITE}>
          nwplus.io
        </A>{' '}
        or follow us on social media to learn about our events and other ways to engage with the
        technology community!
      </>
    }
    showFooter
  />
)
