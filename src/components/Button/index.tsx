import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <>
      <button className="bg-grape text-white py-2 px-6 cursor-pointer rounded-lg">
        {children}
      </button>
    </>
  )
}

export default Button
