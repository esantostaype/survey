'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MainButton } from '@/components'
import { Step1 } from '../steps'
import { Formik, Form } from 'formik'
import { FormValuesStep1 } from '@/interfaces'
import { FormSchemaStep1 } from '@/schema'
import Cookies from 'js-cookie'

export default function Step1Page() {

  const router = useRouter()
  
  const defaultInitialValues: FormValuesStep1 = {
    q1: [], q2: '', q3State: '', q3City: ''
  }

  const [initialValues, setInitialValues] = useState<FormValuesStep1>(defaultInitialValues)

  useEffect(() => {
    const savedValues = Cookies.get('Step1')
    if (savedValues) {
      const parsedValues = JSON.parse(savedValues) as FormValuesStep1
      setInitialValues(parsedValues)
    }
  }, [])

  const handleSubmit = async (values: FormValuesStep1) => {
    Cookies.set('Step1', JSON.stringify(values), { expires: 7 })
    router.push('/survey/step2')
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchemaStep1}
      enableReinitialize
    >
      {({ errors, touched, values, handleChange, setFieldValue }) => (
        <Form>
          <Step1
            errors={errors}
            touched={touched}
            values={values}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
          <div className="mt-12 flex justify-end">
            <MainButton type="submit" label="Continue"/>
          </div>
        </Form>
      )}
    </Formik>
  )
}
