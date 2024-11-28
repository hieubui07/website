"use client"

import React from 'react'
import StarsBackground from "@/components/ui/stars-background";
import ShootingStars from "./ui/shooting-stars";

const Hero = () => {
  return (
    <div className="h-screen relative w-full flex justify-center items-center">
      <div className='absolute top-0 left-0 w-full h-full'>
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className=''>
        <h1 className='text-white'>Hieu Bui</h1>
        <h1 className='text-white'>Developer</h1>
      </div>
     

    </div>
  
  )
}

export default Hero
