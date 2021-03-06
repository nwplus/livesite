import React from 'react'
import Announcements from '../components/Announcements'
import HackerCountdown from '../containers/HackerCountdown'
import { CommonLinks } from '../containers/Quicklinks'
import Livestream from '../components/Livestream'
import styled, { withTheme } from 'styled-components'
import head_decal from '../assets/cmdf_bannerdecal.svg'

const HomeContainer = styled.div`
  height: 100%;
  overflow: hidden;
`

const TopDecal = styled.img`
  position: absolute;
  left: calc(256px - 2em);
  top: -3em;
  pointer-events: none;
  width: calc(100vw - 256px + 2em);
`

export default withTheme(({ announcements, theme }) => {
  return (
    <HomeContainer>
      {theme.name === 'cmdf' && <TopDecal src={head_decal} />}
      <HackerCountdown />
      <CommonLinks />
      <Livestream />
      <Announcements announcements={announcements} />
    </HomeContainer>
  )
})
