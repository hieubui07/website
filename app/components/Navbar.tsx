"use client"
import React, {useState} from 'react'
import Link from "next/link";
import rows_white from "@/public/assets/rows_white.png"
import Image from 'next/image';
import { li } from 'framer-motion/client';

const navItems = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

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
    <nav className='top-0 left-0 right-0 relative'>
      <div className=' w-full h-[100px] drop-shadow-lg'>
        <div className='pl-6 md:p-0 flex items-center justify-between md:justify-normal w-full h-full'>
          <div className='flex justify-between items-center md:mx-auto'>
            <div className='pr-8 font-bold'>
            <Link className='text-[20px] text-white' href="/">Logo</Link>
            </div>
            <ul className='hidden md:flex justify-between items-center gap-8 text-[12px] text-black mb-0'>
              {
                navItems.map((item) => (
                  <li key={item.name}>
                  <Link href={item.href} className='text-black'>{item.name}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* Rows Icon */}
          <div className='md:hidden p-6 relative border-white' onClick={handleClick}>
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
        {/* Mobile Nav */}
        <ul className={!nav ? 'hidden' : 'absolute w-full md:hidden flex flex-col justify-center items-center h-[89vh] bg-slate-900 bg-opacity-100 text-white'}>
          {
            navItems.map((item) => (
              <li key={item.name} className='py-8'>
                <Link href={item.href} onClick={handleClose} className='text-[20px]'>{item.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
