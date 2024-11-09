'use client'
import { BackButton, MainButton, Steps } from '@/components'
import { Step2 } from '../steps'
import { stepsData } from '@/data/data'
import { Formik, Form, FormikHelpers } from 'formik'
import { FormValuesStep2 } from '@/interfaces'
import { FormSchemaStep2 } from '@/schema'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'


export default function Step2Page() {

  const router = useRouter()

  const defaultInitialValues: FormValuesStep2 = {
      q5: '', q6: '', q7: [], q8: '', q9: ''
  }

  const [initialValues, setInitialValues] = useState<FormValuesStep2>(defaultInitialValues)

  useEffect(() => {
    const savedValues = Cookies.get('Step2')
    if (savedValues) {
      const parsedValues = JSON.parse(savedValues) as FormValuesStep2
      setInitialValues(parsedValues)
    }
  }, [])

  const handleSubmit = async (values: FormValuesStep2, actions: FormikHelpers<FormValuesStep2>) => {
    Cookies.set('Step2', JSON.stringify(values), { expires: 7 })
  }

  return (
    <div className="flex items-start flex-1 gap-16">
      <div className="flex-[2] sticky top-16">
        <Steps steps={stepsData} />
      </div>
      <div className="flex-[6]">
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FormSchemaStep2}>
          {({ errors, touched, values, handleChange, setFieldValue }) => (
            <Form>
              <Step2 errors={ errors } touched={ touched } values={ values } handleChange={ handleChange } setFieldValue={ setFieldValue } />
              <div className="mt-12 flex justify-between">
                <BackButton label="Back" path='/survey/step1' />
                <MainButton type="submit" label="Continue"/>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
