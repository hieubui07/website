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
    <div className="h-[calc(100vh_-_0.5px)] w-screen relative grid place-content-center">
      <div className='z-[1]'>
        <h1 className='text-white text-start py-8 text-[30px]'>Hieu Bui</h1>
        <h1 className='text-white text-center text-[60px]'>Developer</h1>
      </div>
      <div className='z-[1] pt-8'>
      <ul className='gap-6 pt-8 flex justify-center items-center'>
        <li className=' size-10'>
          <a href='https://www.linkedin.com/in/hbui0107/'target='blank'>
          <Image 
            src={linkedin.src} 
            alt='LinkedIn'
            width={40}
            height={40}/>
          </a>
        </li>
        <li className=' size-10'>
          <a href='https://mail.google.com/mail/u/1/?fs=1&to=hieubui0107@gmail.com&tf=cm'target='blank'>
            <Image 
              src={gmail.src} 
              alt='email'
              width={40}
              height={40}/>
          </a>
        </li>
        <li className=' size-10'>
          <a href='https://github.com/hieubui07'target='blank'>
            <Image 
              src={github.src} 
              alt="GitHub"
              width={40}
              height={40}/>
          </a>
        </li>
      </ul>
      </div>

    </div>
  
  )
}

export default Hero
