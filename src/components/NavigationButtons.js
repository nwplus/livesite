import React from 'react'
import styled from 'styled-components'

import { Button } from './Button'
import { screenBreakpoints } from './Common'
import { I } from './Typography'

const StyledButton = styled(Button)`
  margin: 0;

  @media (max-width: ${screenBreakpoints.xs}px) {
    margin-bottom: 0.5em;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1em;

  @media (max-width: ${screenBreakpoints.xs}px) {
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-end;
  }
`

const NavigationButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`

export default ({
  firstButtonText,
  firstButtonHref,
  secondButtonText,
  secondButtonHref,
  autosaveTime,
}) => {
  return (
    <NavigationButtonsContainer>
      {autosaveTime && <I>Answers have been autosaved at {autosaveTime}</I>}
      <ButtonContainer>
        <StyledButton color="secondary" href={firstButtonHref}>
          {firstButtonText}
        </StyledButton>
        <StyledButton href={secondButtonHref}>{secondButtonText}</StyledButton>
      </ButtonContainer>
    </NavigationButtonsContainer>
  )
}
