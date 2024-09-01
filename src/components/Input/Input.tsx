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
  error?: string
}

export const Input = ({
  register,
  label,
  type,
  placeholder,
  required,
  name,
  textArea,
  className,
  error
}: Props) => {
  return (
    <div className={`gap-y-2 ${className}`}>
      <p className="text-sm text-gray-400 uppercase tracking-wide">{label}</p>
      {textArea ? (
        <textarea
          {...register(name)}
          // required={required}
          rows={5}
          className={
            'w-full rounded-lg border-t-0 border-l-0 border-r-0 border-b-[3px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 outline-none active:border-b-transparent duration-300 resize-none'
          }
        />
      ) : (
        <input
          {...register(name)}
          type={type ?? 'text'}
          // required={required}
          className={
            'remove-all border-t-0 border-l-0 border-r-0 border-b-[3px] w-full min-h-12 rounded-lg  border-b-gray-600 bg-[#191b1e] text-lightText px-4 outline-none active:border-b-transparent duration-300'
          }
        />
      )}
      {error ? (
        <div className="font-medium text-red-600 text-start">{error}</div>
      ) : null}
    </div>
  )
}
