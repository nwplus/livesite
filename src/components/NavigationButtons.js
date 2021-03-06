import React from 'react'
import styled from 'styled-components'
import { Button } from './Input'
import { I } from './Typography'
import MoonLoader from 'react-spinners/MoonLoader'

const StyledButton = styled(Button)`
  margin: 0;

  ${p => p.theme.mediaQueries.mobile} {
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

  ${p => p.theme.mediaQueries.mobile} {
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
  firstButtonOnClick,
  secondButtonText,
  secondButtonOnClick,
  autosaveTime,
  loading = false,
}) => {
  return (
    <NavigationButtonsContainer>
      {autosaveTime && <I>Answers have been autosaved on {autosaveTime}</I>}
      <ButtonContainer>
        <StyledButton color="secondary" width="flex" onClick={firstButtonOnClick}>
          {firstButtonText}
        </StyledButton>
        <div style={{ display: 'flex' }}>
          <MoonLoader css={{ margin: '0 10px' }} color="#fff" size="30" loading={loading} />
          <StyledButton width="flex" onClick={secondButtonOnClick}>
            {secondButtonText}
          </StyledButton>
        </div>
      </ButtonContainer>
    </NavigationButtonsContainer>
  )
}
