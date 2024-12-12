'use client'

import React from 'react'
import ShootingStars from "@/components/ui/shooting-stars";
import StarsBackground from "@/components/ui/stars-background";

import Navbar from '@/components/Navbar';

function Page () {
  return (
    <main className="bg-slate-900 h-[100vh]">
      <div className='absolute top-0 left-0 w-full h-full z-[0]'>
        <ShootingStars />
        <StarsBackground />
      </div>
      <Navbar/>
    <div id="projects" className=" w-[75%] md:w-[40%] z-[1] h-[calc(100vh_-_8rem_-_35px)] flex flex-col justify-center items-start mx-auto">
      <ul>
        <li>HackTX</li>
      </ul>
    </div>
    </main>
  )
}

export default Page