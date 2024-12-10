"use client"
import React, {useState} from 'react'
import Link from "next/link";
import rows_white from "@/components/assets/rows_white.png"
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
    <nav className='z-10 top-0 left-0 right-0 relative'>
      <div className=' w-full h-[100px] drop-shadow-lg'>
        <div className='pl-6 md:p-0 flex items-center justify-between md:justify-normal w-full h-full'>
          <div className='flex justify-between items-center md:w-[45%] md:mx-auto'>
            <div className=' font-bold text-[20px]'>
            <Link className='text-2xl text-white' href="/">Logo</Link>
            </div>
            <ul className='hidden md:flex justify-between items-center gap-2'>
              <li className='text-white text-[15px]'><Link href="/projects">projects</Link></li>
              <h1 className='text-white'>/</h1>
              <li className='text-white text-[15px]'><Link href="/experiences">experiences</Link></li>
              <h1 className='text-white'>/</h1>
              <li className='text-white text-[15px]'><Link href="/contact">contact</Link></li>
            </ul>
          </div>
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
        <ul className={!nav ? 'hidden' : 'absolute w-full md:hidden flex flex-col justify-center items-center h-[89vh] bg-slate-900 bg-opacity-100 text-white'}>
          <li className='py-6 text-[30px]'><Link onClick={handleClose} href="/projects">projects</Link></li>
          <li className='py-6 text-[30px]'><Link onClick={handleClose} href="/experiences">experiences</Link></li>
          <li className='py-6 text-[30px]'><Link onClick={handleClose} href="/contact">contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
