import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <>
      <button
        className="px-6 py-2 font-titleFont text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-base font-medium"
        type={type ?? 'button'}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button
