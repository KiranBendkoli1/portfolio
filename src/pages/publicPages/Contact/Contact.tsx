import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from 'components/Input/Input'
import Title from 'components/Layouts/Title'
import { useForm } from 'react-hook-form'
import contactSchema from 'schemas/contactSchema'
import { ContactsBody } from 'types/contacts'
import ContactLeft from './ContactLeft'
import { toast } from 'react-toastify'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactsBody>({
    resolver: yupResolver(contactSchema)
  })

  const onSubmit = async (data: ContactsBody) => {
    const { name, email, message, subject, mobile } = data
    const formData = new FormData()
    formData.append('name', name)
    formData.append('mobile', mobile)
    formData.append('email', email)
    formData.append('subject', subject)
    formData.append('message', message)
    formData.append('access_key', '5c1e07c0-1ccc-45e5-ad4f-cf91788ad2d7')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    if (result.success) {
      toast.success('Message sent successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark'
      })
    } else {
      toast.error('Error sending message please try again after some time', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark'
      })
      console.log('Error', result)
    }
  }

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
            >
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <Input
                  name={'name'}
                  register={register}
                  label={'Full name'}
                  placeholder={'Enter full name'}
                  required
                  className="w-full lgl:w-1/2 flex flex-col gap-4 from-[#1e2024] to-[#23272b] "
                  error={errors.name?.message}
                />
                <Input
                  name={'mobile'}
                  register={register}
                  label={'Mobile number'}
                  type={'number'}
                  placeholder={'Enter mobile number'}
                  required
                  className="w-full lgl:w-1/2 flex flex-col gap-4 from-[#1e2024] to-[#23272b] "
                  error={errors.mobile?.message}
                />
              </div>

              <Input
                name={'email'}
                register={register}
                label={'Email address'}
                type={'email'}
                placeholder={'Enter email addreess'}
                required
                className="flex flex-col gap-4"
                error={errors.email?.message}
              />
              <Input
                name={'subject'}
                register={register}
                label={'Subject'}
                placeholder={'Enter subject'}
                required
                className="flex flex-col gap-4"
                error={errors.subject?.message}
              />
              <Input
                name={'message'}
                register={register}
                label={'Message'}
                type={'email'}
                placeholder={'Enter message'}
                required
                textArea
                className="flex flex-col gap-4"
                error={errors.message?.message}
              />
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full h-12 bg-[#141518] rounded-lg text-base shadow-sm-light  text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
