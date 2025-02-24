"use client"

import React from 'react'
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import github from "@/components/pages/logo/githubicon.png";
import gmail from "@/components/pages/logo/gmailicon.png";
import linkedin from "@/components/pages/logo/linkedinicon.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Engineer', 'Analyst'],
    loop: 0,
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  
  return (
    <div id="home" className=" w-[75%] md:w-[60%] z-[1] h-[calc(100vh_-_8rem_-_35px)] flex flex-col justify-center items-start mx-auto">
      <div className='text-[15px]'>
        <h1 className='font-semibold mb-6'>Hi, I'm Hieu Bui</h1>
        <div className='mb-6'>{text}<Cursor/></div>
        <h1 className=''>I'm a developer and problem solver. I like to build products and help people in every way possible. I love to learn and try new things!</h1>
        <h1 className='py-4'>In my free time, I like to explore new places, find new coffee shops, travel, play sports, take photos, and do anything productive!</h1>
      </div>
    </div>
  
  )
}

export default Hero
