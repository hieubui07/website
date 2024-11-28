"use client"

import React from 'react'
import StarsBackground from "@/components/ui/stars-background";
import ShootingStars from "./ui/shooting-stars";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative w-full">
      <div className='absolute top-0 left-0 w-full h-full'>
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className='relative flex justify-center items-center w-full h-full z-[1] text-center text-white'>
        <h1>website</h1>
      </div>
    </div>
  
  )
}

export default Hero
