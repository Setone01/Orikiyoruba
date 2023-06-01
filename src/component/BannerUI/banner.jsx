import React from 'react'

const banner = ({title, image}) => {
  return (
    <div className='w-screen h-[20rem] mt-20 overflow-hidden z-20'>
      <div className="w-full h-full relative grid place-items-center bg-primary1">
        <img src={image} className=' absolute min-w-full min-h-full object-cover' alt="" />
      </div>
      <div className="absolute w-full h-[20rem] mt-20 inset-0 bg-black/40 flex justify-center items-center text-center">
        <h1 className=' bg-transparent text-white font-bold text-3xl md:text-5xl capitalize'>{title}</h1>
      </div>
    </div>
  )
}

export default banner