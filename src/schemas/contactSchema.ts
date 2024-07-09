import * as yup from 'yup'

const contactSchema = yup.object().shape({
  email: yup.string().email().required(),
  mobile: yup.string().optional(),
  message: yup.string().required('Message is required').max(500),
  name: yup.string().required('Name is required')
})

export default contactSchema
