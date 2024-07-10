import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import { Input } from 'components/Input/Input'
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
      <div className="items-center  bg-backround flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container grid grid-cols-1 gap-5 w-[600px] content-center"
        >
           <Input
            name={'name'}
            register={register}
            label={'Full name'}
            placeholder={'Enter full name'}
            required
          />
          <Input
            name={'email'}
            register={register}
            label={'Email address'}
            type={'email'}
            placeholder={'Enter email addreess'}
            required
          />
          <Input
            name={'mobile'}
            register={register}
            label={'Mobile number'}
            type={'number'}
            placeholder={'Enter mobile number'}
            required
          />
          <Input
            name={'message'}
            register={register}
            label={'Message'}
            type={'email'}
            placeholder={'Enter message'}
            required
            textArea
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
