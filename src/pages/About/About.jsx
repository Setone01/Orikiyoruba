import React from 'react'
import Banner from "../../component/BannerUI/banner"
import aboutImg from "../../Assets/images/make-up-g469112bc7_1920.jpg"
import Oriki from './AboutUs/Oriki'
import Contact from './AboutUs/Contact/Contact'

const About = () => {
  return (
    <>
    <Banner title={"about us"} image={aboutImg}/>
    <Oriki/>
    <Contact/>
    </>
  )
}

export default About