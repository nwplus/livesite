import React from 'react'
import styled from 'styled-components'
import { TextInputLike, TextInputLikeErrorMsg as ErrorMsg } from '../components/Common.js'

const inputSize = {
  default: '300px',
  medium: '400px',
  large: '600px',
}

const TextInputContainer = styled.div`
  margin: 1em;
`

const TextInputBox = styled.input.attrs({
  type: 'text',
})`
  width: ${p => (p.size ? inputSize[p.size] : inputSize['default'])};
  ${TextInputLike};
`

export const TextInput = ({ invalid, errorMsg, ...rest }) => {
  return (
    <TextInputContainer>
      <TextInputBox invalid={invalid} {...rest} />
      {invalid && <ErrorMsg> {errorMsg} </ErrorMsg>}
    </TextInputContainer>
  )
}

export default TextInput
