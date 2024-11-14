import React from 'react'
import image from '../assets/images/worship.jpeg'

const About = () => {
  return (
    <div>
       <div className='hero relative w-screen '>
        <div className="container">
          <img src={image} alt="" className='absolute object-cover h-full w-full top-0 left-0 -z-10' />
        </div>
        <div className="textContent relative -top-11 flex flex-col justify-center items-center h-full gap-10">
          <h1 className='text-6xl font-bold text-white opacity-85 text-center max-sm:text-5xl '>The Frontline Church</h1>
          <p className='w-1/2 mx-auto text-center text-white max-sm:text-base '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum perspiciatis autem aperiam harum aspernatur a placeat sint, nesciunt et quidem at amet quisquam deserunt sunt recusandae dicta, porro enim?
          </p>
        </div>
      </div>

    </div>
  )
}

export default About
