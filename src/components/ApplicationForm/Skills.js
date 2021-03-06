import React from 'react'
import { CenteredH1, H3, QuestionHeading, ErrorMessage, ErrorSpan as Required } from '../Typography'
import { TextInput, TextArea } from '../Input'
import ResumeUploadBtn from '../ResumeUploadBtn'
import { FormSpacing, SubHeading } from './'
import styled from 'styled-components'

const QuestionForm = styled.form`
  display: table;
  position: relative;
  & > div {
    display: table-row;

    & > * {
      display: table-cell;
    }
  }
  ${p => p.theme.mediaQueries.tabletLarge} {
    & > div {
      display: block;
      & > * {
        display: block;
        margin: 0.5em 0;
      }
    }
  }
`

const QuestionRow = styled(QuestionHeading)`
  padding-right: 4em;
  ${p => p.theme.mediaQueries.xs} {
    padding-right: 1em;
  }
`

const StyledTextArea = styled(TextArea)`
  margin: 1em 0;
`

const FormRow = ({ id, children }) => (
  <div>
    <QuestionRow>{id}</QuestionRow>
    <div>{children}</div>
  </div>
)

export default ({ errors, formInputs, onChange, role, handleResume }) => {
  return (
    <>
      <FormSpacing>
        <CenteredH1>
          Flex your skills!{' '}
          <span role="img" aria-label="muscle">
            💪
          </span>
        </CenteredH1>
      </FormSpacing>

      <FormSpacing>
        <QuestionHeading>question 12</QuestionHeading>
        <SubHeading>
          {' '}
          Don't be shy! Show off your wonderful skills{' '}
          <span role="img" aria-label="smiling face">
            😁
          </span>
        </SubHeading>
        <H3>
          (Please ensure the links are publicly accessible by opening them in an incognito browser)
        </H3>

        <QuestionForm>
          <FormRow id="resume">
            <ResumeUploadBtn
              onChange={e => {
                if (e.target.files[0]) {
                  handleResume(e.target.files[0])
                }
              }}
              hint={formInputs.resume}
            />
            {errors?.resume && <ErrorMessage>{errors?.resume}</ErrorMessage>}
          </FormRow>

          {role === 'designer' ? (
            <FormRow id="portfolio">
              <TextInput
                inline
                placeholder="Optional"
                size="large"
                value={formInputs.portfolio}
                invalid={!!errors.portfolio}
                errorMsg={errors.portfolio}
                onChange={e =>
                  onChange({
                    portfolio: e.target.value,
                  })
                }
              />
            </FormRow>
          ) : (
            <FormRow id="github">
              <TextInput
                inline
                placeholder="Optional"
                size="large"
                value={formInputs.github}
                invalid={!!errors.github}
                errorMsg={errors.github}
                onChange={e =>
                  onChange({
                    github: e.target.value,
                  })
                }
              />
            </FormRow>
          )}

          <FormRow id="linkedin">
            <TextInput
              inline
              placeholder="Optional"
              size="large"
              value={formInputs.linkedin}
              invalid={!!errors.linkedin}
              errorMsg={errors.linkedin}
              onChange={e =>
                onChange({
                  linkedin: e.target.value,
                })
              }
            />
          </FormRow>

          {role === 'designer' ? (
            <FormRow id="github">
              <TextInput
                inline
                placeholder="Optional"
                size="large"
                value={formInputs.github}
                invalid={!!errors.github}
                errorMsg={errors.github}
                onChange={e =>
                  onChange({
                    github: e.target.value,
                  })
                }
              />
            </FormRow>
          ) : (
            <FormRow id="portfolio">
              <TextInput
                inline
                placeholder="Optional"
                size="large"
                value={formInputs.portfolio}
                invalid={!!errors.portfolio}
                errorMsg={errors.portfolio}
                onChange={e =>
                  onChange({
                    portfolio: e.target.value,
                  })
                }
              />
            </FormRow>
          )}
        </QuestionForm>
      </FormSpacing>

      <FormSpacing>
        <QuestionHeading>question 13</QuestionHeading>
        <SubHeading color="primary">
          Answer one of the two questions:
          <Required />
        </SubHeading>
        <SubHeading size="1.25em">
          1. Describe how you became interested in the world of technology and where you hope to go
          from here on out!
        </SubHeading>
        <SubHeading size="1.25em">
          2. How would you like to challenge yourself during this hackathon?
        </SubHeading>
        <StyledTextArea
          maxLength="650"
          width="100%"
          value={formInputs.longAnswers}
          invalid={!!errors.longAnswers}
          errorMsg={errors.longAnswers}
          onChange={val =>
            onChange({
              longAnswers: val,
            })
          }
        />
      </FormSpacing>
    </>
  )
}
