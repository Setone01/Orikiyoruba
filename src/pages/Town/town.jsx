import React from 'react'
import Banner from '../../component/BannerUI/banner'
import townImage from "../../Assets/images/adire.jpg"
import CityBox from './City/CityBox'

const town = () => {
  return (
    <div className="w-screen max-h-max flex justify-center items-center flex-col">
      <Banner title={"town"} image={townImage} />
      <main className='w-[90%] mx-auto py-20'>
        <CityBox />
      </main>
    </div>
  );
}

export default town