import React from 'react'

import profileImg from '../../../assets/images/kiran2.png'

const RightHero = () => {
  return (
    <>
      <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img
          className="w-[300px] h-[400px] lgl:w-[400px] lgl:h-[480px] z-10"
          src={profileImg}
          alt="bannerImg"
        />
        <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[300px] lgl:h-[350px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      </div>
    </>
  )
}

export default RightHero
