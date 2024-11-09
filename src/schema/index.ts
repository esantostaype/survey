import * as Yup from 'yup'

export const FormSchemaStep1 = Yup.object().shape({
	q1: Yup.array()
    .min(1, 'This field is required')
    .required('This field is required'),
	q2: Yup.string().required('This field is required'),
	q3State: Yup.string().required('This field is required'),
	q3City: Yup.string().required('This field is required')
})

export const FormSchemaStep2 = Yup.object().shape({
	q4: Yup.string().required('This field is required'),
	q5: Yup.string().required('This field is required'),
	q6: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
	q7: Yup.string().required('This field is required'),
	q8: Yup.string().required('This field is required')
})

export const FormSchemaStep3 = Yup.object().shape({
	q9: Yup.string().required('This field is required'),
	q10: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
	q12: Yup.string().required('This field is required'),
	q13: Yup.string().required('This field is required'),
	q14: Yup.string().when('q13', {
		is: (value: any) => typeof value === 'string' && value === 'Yes',
		then: (schema) => schema.required('This field is required'),
		otherwise: (schema) => schema.notRequired(),
	})
})