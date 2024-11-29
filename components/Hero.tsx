"use client"

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import StarsBackground from "@/components/ui/stars-background";
import ShootingStars from "./ui/shooting-stars";
import github from "@/components/logo/githubicon.png";
import gmail from "@/components/logo/gmailicon.png";
import linkedin from "@/components/logo/linkedinicon.png";

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Analyst', 'Engineer'],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  return (
    <div className="h-screen relative w-full grid place-content-center">
      <div className='absolute top-0 left-0 w-full h-full z-[1]'>
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className='z-[1]'>
        <h1 className='text-white text-start py-8 text-[30px]'>Hieu Bui</h1>
        <h1 className='text-white text-center text-[60px]'>{text}<Cursor/></h1>
      </div>
      <div className='z-[1] pt-8'>
      <ul className='gap-6 pt-8 flex justify-center items-center'>
        <li className=' size-10'>
          <a href='https://www.linkedin.com/in/hbui0107/'target='blank'>
          <img src={linkedin.src} alt='LinkedIn'/>
          </a>
        </li>
        <li className=' size-10'>
          <a href='https://mail.google.com/mail/u/1/?fs=1&to=hieubui0107@gmail.com&tf=cm'target='blank'>
            <img src={gmail.src}/>
          </a>
        </li>
        <li className=' size-10'>
          <a href='https://github.com/hieubui07'target='blank'>
            <img src={github.src} alt="GitHub" className="w-full h-full"/>
          </a>
        </li>
      </ul>
      </div>

    </div>
  
  )
}

export default Hero
