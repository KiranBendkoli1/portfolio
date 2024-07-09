import { yupResolver } from '@hookform/resolvers/yup'
import TitleSeperator from 'components/Seperator/TitleSeperator'
import { useForm } from 'react-hook-form'
import contactSchema from 'schemas/contactSchema'
import { ContactsBody } from 'types/contacts'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactsBody>({
    resolver: yupResolver(contactSchema)
  })

  const onSubmit = (data: ContactsBody) => {
    console.log(data)
  }
  return (
    <div className="">
      <TitleSeperator title={'Contact'} />
      <h2 className="text-primary text-2xl text-center divider"></h2>
      <div className="min-h-screen items-center justify-center  bg-backround">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email')}
            placeholder="email"
            type="email"
            required
          />
          <input
            {...register('message')}
            placeholder="email"
            type="text"
            required
          />
          <input
            {...register('mobile')}
            placeholder="email"
            type="text"
            required
          />
          <input
            {...register('name')}
            placeholder="email"
            type="text"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
