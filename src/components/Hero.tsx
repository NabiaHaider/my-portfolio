import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner_bg.jpg)]  bg-cover'
    style={{backgroundSize: "35%" , backgroundPosition: "left 100px top 100px"}}
    >
    <Navbar />  
    <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)">
      <div className="hidden lg:block"></div>

      <div className='text-[100%] sm:text-[120px] font-bold leading-tight flex justify-center items-center text-fuchsia-300'>
        <div>
          <p data-aos="zoom-in-up">I'M </p>
          <p data-aos="zoom-in-up">Nabia</p>
          <p data-aos="zoom-in-up">Haider</p>
         
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
