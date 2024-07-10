import { UseFormRegister } from 'react-hook-form'
export interface Props {
  register: UseFormRegister<any>
  label: string
  type?: string
  placeholder: string
  required: boolean
  name: string
  textArea?: boolean
}

export const Input = ({
  register,
  label,
  type,
  placeholder,
  required,
  name,
  textArea
}: Props) => {
  return (
    <label htmlFor={name} className="text-primary gap-2">
     <span className='my-4'> {label}</span>
      {textArea ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          required={required}
          rows={5}
          className="w-full rounded-lg px-2 text-secondary"
        />
      ) : (
        <input
          {...register(name)}
          placeholder={placeholder}
          type={type ?? 'text'}
          required={required}
          className="w-full h-11 rounded-lg px-2 text-secondary"
        />
      )}
    </label>
  )
}
