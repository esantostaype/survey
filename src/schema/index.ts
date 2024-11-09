import * as Yup from 'yup'

export const FormSchemaStep1 = Yup.object().shape({
	q1: Yup.array()
    .min(1, 'This field is required')
    .required('This field is required'),
	q2: Yup.string().required('This field is required'),
	q3: Yup.string().required('This field is required'),
	q4: Yup.string().required('This field is required')
})

export const FormSchemaStep2 = Yup.object().shape({
	q5: Yup.string().required('This field is required'),
	q6: Yup.string().required('This field is required'),
	q7: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
	q8: Yup.string().required('This field is required'),
	q9: Yup.string().required('This field is required')
})

export const FormSchemaStep3 = Yup.object().shape({
	q10: Yup.string().required('This field is required'),
})