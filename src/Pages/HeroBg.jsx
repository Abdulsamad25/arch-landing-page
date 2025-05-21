import React from 'react'
import HeroPage from '../../public/vid/Hero-Page.mp4'

const HeroBg = () => {
  return (
    <div className='w-full h-screen overflow-hidden' data-aos="fade-up" data-aos-duration="1000" id='home'>
      <video 
      className='w-full h-full object-cover'
      src={HeroPage}
      autoPlay
      loop
      muted
      playsInline
      />
    </div>
  )
}

export default HeroBg
