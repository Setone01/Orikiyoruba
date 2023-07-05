import React from 'react'
import Banner from "../../component/BannerUI/banner"
import aboutImg from "../../Assets/images/make-up-g469112bc7_1920.jpg"
import Oriki from './AboutUs/Oriki'
import Contact from './AboutUs/Contact/Contact'
import Team from './Team/Team'
// import Team from './Team/Teams'

const About = () => {
  return (
    <div div className='flex justify-center items-center flex-col'>
    <Banner title={"about us"} image={aboutImg}/>
    <Oriki/>
    {/* <Team/> */}
    <Team/>
    <Contact/>
    </div>
  )
}

export default About