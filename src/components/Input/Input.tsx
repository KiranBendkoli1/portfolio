import { UseFormRegister } from 'react-hook-form'
export interface Props {
  register: UseFormRegister<any>
  className?: string
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
  textArea,
  className
}: Props) => {
  return (
    <div className={`gap-y-2 ${className}`}>
      <p className="text-sm text-gray-400 uppercase tracking-wide">{label}</p>
      {textArea ? (
        <textarea
          {...register(name)}
          required={required}
          rows={5}
          className="appearance-none  shadow-sm-light border-gray-700 rounded-b-lg p-2 w-full rounded-lg px-2 bg-[#141518]"
        />
      ) : (
        <input
          {...register(name)}
          type={type ?? 'text'}
          required={required}
          className="remove-all border-none  resize-none appearance-none focus:outline-none shadow-sm-light border-gray-700 rounded-b-lg p-2 w-full rounded-lg px-2 bg-[#141518] from-[#1e2024] to-[#23272b]"
        />
      )}
    </div>
  )
}
