import React from 'react'
import { TbMusic } from 'react-icons/tb'

const DefaultThumbnail = () => {
  return (
    <div className='bg-primary1 flex justify-center items-center text-2xl rounded-lg  w-full h-full'>
        <TbMusic className=' bg-transparent'/>
    </div>
  )
}

export default DefaultThumbnail