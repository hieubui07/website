"use client"

import React from 'react'
import Image from 'next/image';
/*import { useTypewriter, Cursor } from 'react-simple-typewriter'*/
import github from "@/components/pages/logo/githubicon.png";
import gmail from "@/components/pages/logo/gmailicon.png";
import linkedin from "@/components/pages/logo/linkedinicon.png";

const Hero = () => {
  /*const [text] = useTypewriter({
    words: ['Developer', 'Analyst', 'Engineer'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 80,
    
  });
  */
  return (
    <div id="home" className="h-[calc(100vh_-_100px)] w-[75%] md:w-[30%] flex justify-center items-start pt-20 lg:pt-[180px] xl:pt-20 mx-auto z-[1] ">
      <div className=''>
        <h1 className='text-white py-8 text-[20px]'>Hi, I'm Hieu Bui</h1>
        <h1 className='text-white py-4 text-[20px]'>Developer</h1>
        <h1 className='text-white text-[15px]'> I'm a developer and problem solver. I like to build products and help people in every way possible. I love to learn new things</h1>
        <h1 className='text-white py-4 text-[15px]'> I'm a developer and problem solver. I like to build products and help people in every way possible. I love to learn new things</h1>
      </div>
      

    </div>
  
  )
}

export default Hero
