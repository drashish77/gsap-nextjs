import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div
        className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-400'
        id='video-frame'
      >
        <div className=''>
          <div className=' mask-clip-path'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
