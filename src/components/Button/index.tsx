import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className='bg-grape text-white py-2 px-6 cursor-pointer rounded-lg'>{children}</button>
    </>
  )
}

export default Button
