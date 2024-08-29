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
        className="px-5 h-12 bg-designColor rounded-lg text-base shadow-sm-light text-white  font-bold tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
        type={type ?? 'button'}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button
