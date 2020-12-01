import React from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${p => (p.checked ? p.theme.colors.primary : p.theme.colors.background)};
  border-radius: 3px;
  border: 2px solid ${p => (p.checked ? p.theme.colors.primary : p.theme.colors.default)};
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px ${p => p.theme.colors.default};
  }

  :hover {
    border: 2px solid ${p => p.theme.colors.primary};
  }

  ${Icon} {
    visibility: ${p => (p.checked ? 'visible' : 'hidden')};
  }
`

const CheckboxContainer = styled.div`
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.5em 0 1em;
`

export default ({ className, checked, label, ...props }) => (
  <label style={{ cursor: 'pointer' }}>
    <CheckboxContainer className={className}>
      <HiddenCheckbox checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <span>{label}</span>
  </label>
)
