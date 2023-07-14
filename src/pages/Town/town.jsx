import React from 'react'
import Banner from '../../component/BannerUI/banner'
import townImage from "../../Assets/images/adire.jpg"

const town = () => {
  return (
    <div className='w-screen max-h-max flex justify-center items-center flex-col'>
    <Banner title={"town"} image={townImage}/>
    </div>
  )
}

export default town