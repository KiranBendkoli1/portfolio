import React from 'react'

const TitleSeperator: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-[600px] h-1 my-8  bg-primary" />
        <div className="font-cardo italic absolute px-4 -translate-x-1/2 left-1/2 bg-backround text-primary text-[50px]">
          {title}
        </div>
      </div>
    </>
  )
}

export default TitleSeperator
