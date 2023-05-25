import React from 'react'
import Carousel from './Carousel/Carousel'
import Services from './Services/Services'
// import CoreValue from './CoreValue/CoreValue'
import Newsletter from './Newsletter/Newsletter'
import Testimonial from './Testimonial/Testimonial'

const Home = () => {
  return (
    <>
    <Carousel/>
    <Services/>
    {/* <CoreValue/> */}
    <Testimonial/>
    <Newsletter/>
    </>
  )
}

export default Home