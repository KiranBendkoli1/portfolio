import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/Button'
import { Input } from 'components/Input/Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import projectSchema from 'schemas/projectSchema'
import { ProjectBody } from 'types/project'

const AddProject = () => {
  const [live, setLive] = useState<boolean>(false)
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
      <h1 className="text-primary text-3xl">Add new project</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container grid grid-cols-1 gap-5  content-center sm:grid-cols-2"
      >
        <div>
          <Input
            name={'title'}
            register={register}
            label={'Project Title'}
            placeholder={'Enter project title'}
            className="my-4"
            required
          />
          <Input
            name={'github_url'}
            register={register}
            label={'Github repository link'}
            type={'email'}
            className="my-4"
            placeholder={'Enter github repository link'}
            required
          />
          <div className="text-primary">
            <input
              type="checkbox"
              onChange={() => setLive((prev) => !prev)}
              className="rounded "
            />{' '}
            &nbsp; does this have live URL? <br />{' '}
            {!live && (
              <Input
                name={'live'}
                register={register}
                className="my-4"
                label={'Live link'}
                placeholder={'Enter live link'}
                required
              />
            )}
          </div>
        </div>
        <Input
          name={'description'}
          register={register}
          className="my-4"
          label={'Project Description'}
          placeholder={'Enter project description'}
          required
          textArea
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default AddProject
