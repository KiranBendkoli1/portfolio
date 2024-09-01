import * as yup from 'yup'

const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  mobile: yup.string().required('Mobile Number is required'),
  email: yup
    .string()
    .email('Valid email address is required')
    .required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').max(500)
})

export default contactSchema
