import React from 'react'
import "./Hero.css";
const Hero = () => {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero__container'>
          <div className='hero__box'>
            <h1 className='hero__title' data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
              Achieve your future With Smart Academy
            </h1>
            <p className='hero__text' data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique sem ut lacinia pellentesque. Donec in nulla faucibus, tincidunt velit vel, ultricies dolor.
            </p>
            <button className='hero__btn' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              Explore Course
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero