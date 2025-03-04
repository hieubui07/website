import React from 'react'

function Home () {
    return (
    <div id='home' className='w-[70%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center mx-auto'>
      <h1 className='font-semibold text-white mb-4 text-[14px] text-center'>About Me</h1>
      <p className='text-[12px] mb-0 leading-6'>
      I'm a developer and problem solver. I like to build products and help people in every way possible. I love to learn and try new things!
      In my free time, I like to explore new places, find new coffee shops, travel, play sports, take photos, and do anything productive!
      </p>
  </div>
  )
}

export default Home

