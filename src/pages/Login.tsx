import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import { Input } from 'components/Input/Input'
import TitleSeperator from 'components/Seperator/TitleSeperator'
import { useForm } from 'react-hook-form'
import loginSchema from 'schemas/loginSchema'
import { LoginBody } from 'types/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'config/firebase'
import { emit } from 'process'
import { toast } from 'react-toastify'
import useThemeStore from 'store/useThemeStore'

const Login = () => {
  const theme = useThemeStore((state) => state.theme)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginBody>({
    resolver: yupResolver(loginSchema)
  })

  const onSubmit = async (data: LoginBody) => {
    const { email, password } = data
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredentials.user
      toast.success('Login Successfully!', {theme})
      console.log(user)
    } catch (error) {
      console.log(error)
      toast.error('Incorrect credentials!', {theme})
    }
  }

  return (
    <div className="">
      <TitleSeperator title={'Login'} />
      <h2 className="text-primary text-2xl text-center divider"></h2>
      <div className="items-center  bg-backround flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container grid grid-cols-1 gap-5 w-[600px] content-center"
        >
          <Input
            name={'email'}
            register={register}
            label={'Email address'}
            type={'email'}
            placeholder={'Enter email addreess'}
            required
          />
          <Input
            name={'password'}
            register={register}
            label={'Password'}
            type={'password'}
            placeholder={'Enter password'}
            required
          />

          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  )
}

export default Login
