'use client'
import { FormValuesStep2 } from '@/interfaces'
import { ErrorForm, LabelForm, SectionForm, TitleForm } from '@/components'
import { Checkbox, FormControlLabel, FormGroup, Radio, RadioGroup, SelectChangeEvent, TextField } from '@mui/material'
import { FormikErrors, FormikTouched } from 'formik'
import { ReactNode, useState } from 'react'

interface Props {
  errors: FormikErrors<FormValuesStep2>
  touched: FormikTouched<FormValuesStep2>
  values: FormValuesStep2
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
  setFieldValue: (field: string, value: unknown) => void
}

export const Step2 = ({ errors, touched, values, handleChange, setFieldValue }: Props) => {
  const [otherValue, setOtherValue] = useState("")

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let currentValues = values[name as keyof FormValuesStep2] as unknown as string[];

    if (value === "Other") {
      if (currentValues.some((item) => item.startsWith("Other:"))) {
        setFieldValue(
          name,
          currentValues.filter((item) => !item.startsWith("Other:"))
        );
        setOtherValue("")
      } else {
        setFieldValue(name, [...currentValues, "Other: "]);
      }
    } else {
      if (currentValues.includes(value)) {
        setFieldValue(name, currentValues.filter((v) => v !== value));
      } else {
        setFieldValue(name, [...currentValues, value]);
      }
    }
  };

  const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOtherValue(value);
    const updatedValues = values.q7.map((item) =>
      item.startsWith("Other:") ? `Other: ${value}` : item
    );
    setFieldValue("q7", updatedValues);
  };

  return (
    <>
      <TitleForm title='Current Digital Presence' />
      <SectionForm>
        <LabelForm label='4. Does your company have a website?'/>
        <RadioGroup row name="q5" value={ values.q5 } onChange={ handleChange }>
          {['Yes', 'No'].map(( label ) => (
            <FormControlLabel key={ label } value={ label } control={<Radio />} label={ label } />
          ))}
        </RadioGroup>
        { touched.q5 && errors.q5 && <ErrorForm label={ errors.q5 } />}
      </SectionForm>
      <SectionForm>
        <LabelForm label='5. How satisfied are you with your current website?'/>
        <RadioGroup row name="q6" value={ values.q6 } onChange={ handleChange }>
          {['Very satisfied', 'Satisfied', 'Neutral', 'Unsatisfied', 'Very unsatisfied'].map(( label ) => (
            <FormControlLabel key={ label } value={ label } control={<Radio />} label={ label } />
          ))}
        </RadioGroup>
        { touched.q6 && errors.q6 && <ErrorForm label={ errors.q6 } />}
      </SectionForm>
      <SectionForm>
        <LabelForm label='6. What aspects of your website are you dissatisfied with? (You may select more than one)'/>
        <FormGroup>
          {['Outdated design', 'Limited functionalities', 'Not responsive (not mobile-friendly)', 'Difficult to update content', 'Slow loading speed', 'Other'].map((label) => (
            <FormControlLabel
              control={
                <Checkbox
                  name="q7"
                  value={label}
                  checked={label === "Other" ? values.q7.some((item) => item.startsWith("Other:")) : values.q7.includes(label)}
                  onChange={handleCheckboxChange}
                />
              }
              label={label}
              key={label}
            />
          ))}
        </FormGroup>
        {values.q7.some((item) => item.startsWith("Other")) && (
          <TextField
            label="Please specify"
            value={otherValue}
            onChange={handleOtherChange}
            fullWidth
            margin="normal"
          />
        )}
        { touched.q7 && errors.q7 && <ErrorForm label={ errors.q7 } />}
      </SectionForm>
      <SectionForm>
        <LabelForm label='7. Does your company use web or mobile applications to interact with customers or manage internal operations?'/>
        <RadioGroup row name="q8" value={ values.q8 } onChange={ handleChange }>
          {['Yes', 'No', 'It is in our future plans'].map(( label ) => (
            <FormControlLabel key={ label } value={ label } control={<Radio />} label={ label } />
          ))}
        </RadioGroup>
        { touched.q8 && errors.q8 && <ErrorForm label={ errors.q8 } />}
      </SectionForm>
      <SectionForm>
        <LabelForm label='8. Do you have established branding and graphic design strategies (logo, visual identity, promotional materials, etc.)?'/>
        <RadioGroup row name="q9" value={ values.q9 } onChange={ handleChange }>
          {['Yes', 'Partially', 'No'].map(( label ) => (
            <FormControlLabel key={ label } value={ label } control={<Radio />} label={ label } />
          ))}
        </RadioGroup>
        { touched.q9 && errors.q9 && <ErrorForm label={ errors.q9 } />}
      </SectionForm>
    </>
  )
}