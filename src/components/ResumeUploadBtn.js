import React, { useRef } from 'react'
import { Button } from '../components/Input'
import styled from 'styled-components'
import { ErrorMessage } from './Typography'

const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
`
const ResumeFile = ({ inputFile, onChange }) => {
  return <input ref={inputFile} type="file" hidden onChange={onChange} />
}

const StyledButton = styled(Button)`
  margin-left: 0;
`

const UploadButton = ({ handleClick }) => {
  return (
    <StyledButton color="tertiary" onClick={handleClick}>
      Upload
    </StyledButton>
  )
}

export default ({ onChange, hint, errorMsg }) => {
  const inputFile = useRef()

  const handleClick = () => {
    inputFile.current.click()
  }

  return (
    <ResumeContainer>
      <ResumeFile inputFile={inputFile} onChange={onChange} />
      <UploadButton handleClick={handleClick} />
      {hint ? <span>✔ {hint} uploaded!</span> : <ErrorMessage>{errorMsg}</ErrorMessage>}
    </ResumeContainer>
  )
}
