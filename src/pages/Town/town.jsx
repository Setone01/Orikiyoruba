import React from 'react'
import Banner from '../../component/BannerUI/banner'
import townImage from "../../Assets/images/adire.jpg"
import Content from './Oriki/Content'

const town = () => {
  return (
    <div className='w-screen max-h-max flex justify-center items-center flex-col'>
    <Banner title={"town"} image={townImage}/>
    <Content/>
    </div>
  )
}

export default town