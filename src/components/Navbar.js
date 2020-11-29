import React from 'react'
import styled from 'styled-components'
import { P } from './Typography'
import icon from '../assets/nwhacks_icon.svg'
import Button from './Button'

const NavContainer = styled.div`
  display: flex;
  height: 60px;
  padding: 15px 145px;
  position: relative;
  align-items: center;
`

const Icon = styled.img`
  width: 30px;
  height: 42px;
`
const Greeting = styled(P)`
  margin-left: auto;
  font-weight: 700;
  font-size: 18px;
`

export default ({ name, handleLogout }) => (
  <NavContainer>
    <Icon src={icon} alt="nwHacks icon" />
    {name && <Greeting>Hi, {name} &#128540;</Greeting>}
    {handleLogout && (
      <Button onClick={handleLogout} color="primary">
        Logout
      </Button>
    )}
  </NavContainer>
)
