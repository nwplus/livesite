import React, { useRef } from 'react'
import { Button } from '../components/Input'
import styled from 'styled-components'
import { TextInputLikeErrorMsg } from './Common'

const ResumeContainer = styled.div`
  display: flex;
  align-items: center;
`
const ResumeFile = ({ inputFile, onChange }) => {
  return <input ref={inputFile} type="file" hidden onChange={onChange} />
}

const UploadButton = ({ handleClick }) => {
  return (
    <Button color="tertiary" onClick={handleClick}>
      Upload
    </Button>
  )
}

export default ({ onChange, file, errorMsg }) => {
  const inputFile = useRef()

  const handleClick = () => {
    inputFile.current.click()
  }

  return (
    <ResumeContainer>
      <ResumeFile inputFile={inputFile} onChange={onChange} />
      <UploadButton handleClick={handleClick} />
      {file !== undefined &&
        (file.name ? (
          <span>{file.name}</span>
        ) : (
          <TextInputLikeErrorMsg>{errorMsg}</TextInputLikeErrorMsg>
        ))}
    </ResumeContainer>
  )
}
