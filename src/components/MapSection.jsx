import React from 'react'

const MapSection = () => {
  return (
    <div className='mapSection w-full h-96 bg-red-200 mb-11 relative'>
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31803.184994165134!2d6.9632421347656175!3d4.8727883000000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d1c2205f4769%3A0x482571f668ff1db8!2sChurch%20Of%20Christ!5e0!3m2!1sen!2sng!4v1731418956365!5m2!1sen!2sng" height={'100%'} width={'100%'} className='absolute top-0 left-0 object-cover z-10'>
       </iframe>
    </div>
  )
}

export default MapSection
