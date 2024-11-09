'use client'
import { FormValuesStep3 } from '@/interfaces'
import { ErrorForm, LabelForm, SectionForm, TitleForm } from '@/components'
import { FormControlLabel, Radio, RadioGroup, SelectChangeEvent } from '@mui/material'
import { FormikErrors, FormikTouched } from 'formik'
import { ReactNode } from 'react'

interface Props {
  errors: FormikErrors<FormValuesStep3>
  touched: FormikTouched<FormValuesStep3>
  values: FormValuesStep3
  handleChange: (event: SelectChangeEvent<string>, child: ReactNode) => void
  setFieldValue: (field: string, value: unknown) => void
}

export const Step3 = ({ errors, touched, values, handleChange }: Props) => {

  return (
    <>
      <TitleForm title='Digital Needs and Preferences' />
      <SectionForm>
        <LabelForm label='9. How important is it for your company to improve or develop its digital presence in the next 12 months?'/>
        <RadioGroup name="q10" value={ values.q10 } onChange={ handleChange }>
          {['Very important', 'Important', 'Moderately important', 'Slightly important', 'Not important'].map(( label ) => (
            <FormControlLabel key={ label } value={ label } control={<Radio />} label={ label } />
          ))}
        </RadioGroup>
        { touched.q10 && errors.q10 && <ErrorForm label={ errors.q10 } />}
      </SectionForm>
    </>
  )
}