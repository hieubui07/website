"use client"
import React, {useState} from 'react'
import Link from "next/link";
import rows_white from "@/components/assets/rows_white.png"
import NavLink from '@/components/NavLink';
import Image from 'next/image';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
      setNav(!nav);
    }
    const handleClose =()=> setNav(!nav)
    const [rotation, setRotation] = useState(0);

    const rotateImage = () => {
        setRotation(rotation + 90);
     };

    return (
    <nav className='z-10 mx-auto top-0 left-0 right-0 relative'>
      <div className=' w-screen h-[100px] drop-shadow-lg'>
        <div className='px-2 flex justify-between md:justify-evenly items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>
            <Link className='text-2xl text-white' href="/">Logo</Link>
            </h1>
            <ul className='hidden md:flex justify-between items-center gap-6'>
              <li className='text-white'><Link href="/projects">projects</Link></li>
              <li className='text-white'><Link href="/experiences">experiences</Link></li>
              <li className='text-white'><Link href="/contact">contact</Link></li>
            </ul>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
              {!nav ? <Image onClick={rotateImage}
            src={rows_white}
            alt=''
            height={40}
            width={40}
             /> : <Image onClick={rotateImage}
             style={{ transform: `rotate(${rotation}deg)` }}
             src={rows_white}
             alt=''
             height={40}
             width={40}
              />}
          </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute w-full flex flex-col justify-center items-center h-[89vh] bg-slate-900 bg-opacity-100 text-white'}>
          <li className='py-6 text-4xl'><Link onClick={handleClose} href="/projects">projects</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClose} href="/experiences">experiences</Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClose} href="/contact">contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
