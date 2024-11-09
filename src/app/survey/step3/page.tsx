'use client'
import { BackButton, MainButton } from '@/components'
import { Step3 } from '../steps'
import { Formik, Form } from 'formik'
import { FormValuesStep3 } from '@/interfaces'
import { FormSchemaStep3 } from '@/schema'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'


export default function Step3Page() {
  const defaultInitialValues: FormValuesStep3 = {
    q10: ''
  }

  const [initialValues, setInitialValues] = useState<FormValuesStep3>(defaultInitialValues)

  useEffect(() => {
    const savedValues = Cookies.get('Step3')
    if (savedValues) {
      const parsedValues = JSON.parse(savedValues) as FormValuesStep3
      setInitialValues(parsedValues)
    }
  }, [])

  const handleSubmit = async (values: FormValuesStep3) => {
    Cookies.set('Step3', JSON.stringify(values), { expires: 7 })
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FormSchemaStep3} enableReinitialize>
      {({ errors, touched, values, handleChange, setFieldValue }) => (
        <Form>
          <Step3 errors={ errors } touched={ touched } values={ values } handleChange={ handleChange } setFieldValue={ setFieldValue } />
          <div className="mt-12 flex md:flex-row flex-col gap-2 justify-between">
            <BackButton label="Back" path='/survey/step2' />
            <MainButton type="submit" label="Continue"/>
          </div>
        </Form>
      )}
    </Formik>
  )
}
