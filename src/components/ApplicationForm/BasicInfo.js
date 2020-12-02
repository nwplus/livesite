import React from 'react'
import { H1, QuestionHeading, CenteredH1 } from '../Typography'
import { TextInput } from '../Input/TextInput'
import Dropdown from '../Input/Dropdown'
import Select from '../Input/Select'
import { FormSpacing } from '../ApplicationForm/index'
import schools from '../../containers/Application/data/schools.json'
import majors from '../../containers/Application/data/majors.json'

const genderOptions = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'other', label: 'Other' },
  { value: 'prefer not to say', label: 'Prefer not to say' },
]

const educationOptions = [
  { value: 'high school', label: 'High school' },
  { value: 'undergraduate', label: 'Undergraduate' },
  { value: 'graduate', label: 'Graduate or Post-Graduate' },
  { value: 'other', label: 'Other' },
]

// check w logs
const graduationOptions = [
  { value: 2019, label: '2019' },
  { value: 2020, label: '2020' },
  { value: 2021, label: '2021' },
  { value: 2022, label: '2022' },
  { value: 2023, label: '2023' },
  { value: 2024, label: '2024' },
  { value: 2025, label: '2025+' },
]

// check w logs
const hackathonOptions = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4+' },
]

// form part 1
export default ({ formInputs, onChange }) => (
  <>
    <FormSpacing>
      <CenteredH1>
        Tell us about yourself!{' '}
        <span role="img" aria-label="smile">
          &#128578;
        </span>
      </CenteredH1>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 01</QuestionHeading>
      <H1 size="1.5em">What is your preferred name?</H1>
      <TextInput
        placeholder="First Name"
        value={formInputs.firstName}
        onChange={e =>
          onChange({
            ...formInputs,
            firstName: e.target.value,
          })
        }
      ></TextInput>
      <TextInput
        placeholder="Last Name"
        value={formInputs.lastName}
        onChange={e =>
          onChange({
            ...formInputs,
            lastName: e.target.value,
          })
        }
      ></TextInput>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 02</QuestionHeading>
      <H1 size="1.5em">Which gender do you identify as?</H1>
      <Dropdown
        options={genderOptions}
        placeholder="Gender"
        isSearchable={false}
        value={formInputs.gender}
        onChange={e =>
          onChange({
            ...formInputs,
            gender: e.value,
          })
        }
        isValid
      ></Dropdown>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 03</QuestionHeading>
      <H1 size="1.5em">What is your race/ethnicity? (Select all that apply)</H1>
      <Select
        type="checkbox"
        label="Asian"
        checked={formInputs.ethnicity.asian}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: { ...formInputs.ethnicity, asian: !formInputs.ethnicity.asian },
          })
        }
      ></Select>
      <Select
        type="checkbox"
        label="Black or African American"
        checked={formInputs.ethnicity.black}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: { ...formInputs.ethnicity, black: !formInputs.ethnicity.black },
          })
        }
      ></Select>
      <Select
        type="checkbox"
        label="Caucasian or European"
        checked={formInputs.ethnicity.caucasian}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: { ...formInputs.ethnicity, caucasian: !formInputs.ethnicity.caucasian },
          })
        }
      ></Select>
      <Select
        type="checkbox"
        label="Hispanic or Latinx"
        checked={formInputs.ethnicity.hispanic}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: { ...formInputs.ethnicity, hispanic: !formInputs.ethnicity.hispanic },
          })
        }
      ></Select>
      <Select
        type="checkbox"
        label="Middle Eastern"
        checked={formInputs.ethnicity.middleEastern}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: {
              ...formInputs.ethnicity,
              middleEastern: !formInputs.ethnicity.middleEastern,
            },
          })
        }
      ></Select>
      <Select
        type="checkbox"
        label="Native Hawaiian or Pacific Islander"
        checked={formInputs.ethnicity.nativeHawaiian}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: {
              ...formInputs.ethnicity,
              nativeHawaiian: !formInputs.ethnicity.nativeHawaiian,
            },
          })
        }
      ></Select>
      <Select
        type="checkbox"
        label="North American Indigenous"
        checked={formInputs.ethnicity.northAmerica}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: {
              ...formInputs.ethnicity,
              northAmerica: !formInputs.ethnicity.northAmerica,
            },
          })
        }
      ></Select>
      <Select
        type="checkbox"
        label="Other"
        checked={formInputs.ethnicity.other}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: { ...formInputs.ethnicity, other: !formInputs.ethnicity.other },
          })
        }
      ></Select>
      <Select
        type="checkbox"
        label="Prefer not to say"
        checked={formInputs.ethnicity.preferNot}
        onChange={() =>
          onChange({
            ...formInputs,
            ethnicity: { ...formInputs.ethnicity, preferNot: !formInputs.ethnicity.preferNot },
          })
        }
      ></Select>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 04</QuestionHeading>
      <H1 size="1.5em">Will you be 19 years or older by January 9th, 2021?</H1>
      <Select
        type="radio"
        label="Yes"
        checked={formInputs.isOfLegalAge === true}
        onChange={() => onChange({ ...formInputs, isOfLegalAge: true })}
      ></Select>
      <Select
        type="radio"
        label="No"
        checked={formInputs.isOfLegalAge === false}
        onChange={() => onChange({ ...formInputs, isOfLegalAge: false })}
      ></Select>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 05</QuestionHeading>
      <H1 size="1.5em">What is your phone number?</H1>
      <TextInput
        placeholder="XXX-XXX-XXXX"
        value={formInputs.phoneNumber}
        onChange={e =>
          onChange({
            ...formInputs,
            phoneNumber: e.target.value,
          })
        }
      ></TextInput>
      {/* validation check is num */}
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 06</QuestionHeading>
      <H1 size="1.5em">What school do you go to?</H1>
      <Dropdown
        options={schools}
        placeholder="Enter your school"
        isSearchable
        formatCreateLabel={inputValue => `My school is not listed, use "${inputValue}"`}
        label={formInputs.school}
        onChange={e =>
          onChange({
            ...formInputs,
            school: e.label,
          })
        }
        emptySearchDefaultOption="Start typing to search"
        canCreateNewOption
        isValid
      ></Dropdown>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 07</QuestionHeading>
      <H1 size="1.5em">What is your current or intended major?</H1>
      <Dropdown
        options={majors}
        placeholder="Enter your major"
        isSearchable
        formatCreateLabel={inputValue => `My major is not listed, use "${inputValue}"`}
        label={formInputs.major}
        onChange={e =>
          onChange({
            ...formInputs,
            major: e.label,
          })
        }
        emptySearchDefaultOption="Start typing to search"
        canCreateNewOption
        isValid
      ></Dropdown>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 08</QuestionHeading>
      <H1 size="1.5em">What is your current level of education?</H1>
      <Dropdown
        options={educationOptions}
        placeholder="Level of Education"
        isSearchable={false}
        value={formInputs.educationLevel}
        onChange={inputValue =>
          onChange({
            ...formInputs,
            educationLevel: inputValue.value,
          })
        }
        isValid
      ></Dropdown>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 09</QuestionHeading>
      <H1 size="1.5em">What is your graduation year?</H1>
      <Dropdown
        options={graduationOptions}
        placeholder="Graduation Year"
        isSearchable={false}
        value={formInputs.graduation}
        onChange={inputValue =>
          onChange({
            ...formInputs,
            graduation: inputValue.value,
          })
        }
        isValid
      ></Dropdown>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 10</QuestionHeading>
      <H1 size="1.5em">How many hackathons have you attended (both online and in-person)?</H1>
      <Dropdown
        options={hackathonOptions}
        placeholder="Number of Hackathons"
        isSearchable={false}
        value={formInputs.hackathonsAttended}
        onChange={inputValue =>
          onChange({
            ...formInputs,
            hackathonsAttended: inputValue.value,
          })
        }
        isValid
      ></Dropdown>
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 11</QuestionHeading>
      <H1 size="1.5em">
        How do you want to contribute at nwHacks? Please select the category that you're strongest
        in.
      </H1>
      <Select
        type="radio"
        label="Developer"
        checked={formInputs.contributionRole === 'Developer'}
        onChange={() => onChange({ ...formInputs, contributionRole: 'Developer' })}
      ></Select>
      <Select
        type="radio"
        label="Designer"
        checked={formInputs.contributionRole === 'Designer'}
        onChange={() => onChange({ ...formInputs, contributionRole: 'Designer' })}
      ></Select>
      <Select
        type="radio"
        label="Hardware/Robotics"
        checked={formInputs.contributionRole === 'Hardware/Robotics'}
        onChange={() => onChange({ ...formInputs, contributionRole: 'Hardware/Robotics' })}
      ></Select>
      <Select
        type="radio"
        label="Product Manager"
        checked={formInputs.contributionRole === 'Product Manager'}
        onChange={() => onChange({ ...formInputs, contributionRole: 'Product Manager' })}
      ></Select>
      <Select
        type="radio"
        label="Data Scientist"
        checked={formInputs.contributionRole === 'Data Scientist'}
        onChange={() => onChange({ ...formInputs, contributionRole: 'Data Scientist' })}
      ></Select>
      <Select
        type="radio"
        label="Business Strategist"
        checked={formInputs.contributionRole === 'Business Strategist'}
        onChange={() => onChange({ ...formInputs, contributionRole: 'Business Strategist' })}
      ></Select>
      <Select
        type="radio"
        label="Other"
        checked={formInputs.contributionRole === 'Other'}
        onChange={() => onChange({ ...formInputs, contributionRole: 'Other' })}
      ></Select>
      {/* insert new input component for 'Please Specify' */}
    </FormSpacing>

    <FormSpacing>
      <QuestionHeading>question 12</QuestionHeading>
      <H1 size="1.5em">Where are you currently located?</H1>
      <TextInput
        placeholder="Enter your city and country"
        value={formInputs.location}
        onChange={e =>
          onChange({
            ...formInputs,
            location: e.target.value,
          })
        }
      ></TextInput>
    </FormSpacing>
  </>
)