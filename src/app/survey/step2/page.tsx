'use client'
import { useRouter } from 'next/navigation'
import { BackButton, MainButton } from '@/components'
import { Step2 } from '../steps'
import { Formik, Form } from 'formik'
import { FormValuesStep2 } from '@/interfaces'
import { FormSchemaStep2 } from '@/schema'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'


export default function Step2Page() {

  const router = useRouter()

  const defaultInitialValues: FormValuesStep2 = {
    q4: '', q5: '', q6: [], q6Other: '', q7: '', q8: ''
  }

  const [initialValues, setInitialValues] = useState<FormValuesStep2>(defaultInitialValues)

  useEffect(() => {
    const savedValues = Cookies.get('Step2')
    if (savedValues) {
      const parsedValues = JSON.parse(savedValues) as FormValuesStep2
      setInitialValues(parsedValues)
    }
  }, [])

  const handleSubmit = async (values: FormValuesStep2) => {
    Cookies.set('Step2', JSON.stringify(values), { expires: 7 })
    router.push('/survey/step3')
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FormSchemaStep2} enableReinitialize>
      {({ errors, touched, values, handleChange, setFieldValue }) => (
        <Form>
          <Step2 errors={ errors } touched={ touched } values={ values } handleChange={ handleChange } setFieldValue={ setFieldValue } />
          <div className="mt-12 flex md:flex-row flex-col gap-2 justify-between">
            <BackButton label="Back" path='/survey/step1' />
            <MainButton type="submit" label="Continue"/>
          </div>
        </Form>
      )}
    </Formik>
  )
}
