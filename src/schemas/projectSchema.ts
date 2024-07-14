import * as yup from 'yup'

const projectSchema = yup.object().shape({
  title: yup.string().required('Project title is required'),
  description: yup
    .string()
    .required('Project description is required')
    .max(500),
  github_url: yup.string().required('Github url is required'),
  is_live: yup.boolean().required(),
  live_url: yup.string().optional(),
  domain: yup.string().required(),
  image1: yup.mixed().required('Image is required'),
  image2: yup.mixed().required('Image is required'),
  image3: yup.mixed().required('Image is required')
})

export default projectSchema
