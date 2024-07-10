import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type: 'submit' | 'reset' | 'button'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <>
      <button
        className="bg-grape text-white py-2 px-6 cursor-pointer rounded-lg"
        type={type ?? 'button'}
      >
        {children}
      </button>
    </>
  )
}

export default Button
