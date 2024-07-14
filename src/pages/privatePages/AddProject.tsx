import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import { Input } from 'components/Input/Input'
import { useForm } from 'react-hook-form'
import projectSchema from 'schemas/projectSchema'
import { ProjectBody } from 'types/project'

const AddProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ProjectBody>({
    resolver: yupResolver(projectSchema)
  })

  const onSubmit = (data: ProjectBody) => {
    console.log(data)
  }

  return (
    <div>
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
  )
}

export default AddProject
