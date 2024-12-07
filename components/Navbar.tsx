"use client"
import React, {useState} from 'react'
import Link from "next/link";
import rows_white from "@/components/assets/rows_white.png"
import NavLink from '@/components/NavLink';
import Image from 'next/image';

const Navbar = () => {
    const [nav, setNavbarOpen] = useState(false);
    const handleClick = () => setNavbarOpen(!nav);
    const [rotation, setRotation] = useState(0);

    const rotateImage = () => {
        setRotation(rotation + 90);
     };

    return (
      <nav className='z-10 mx-auto top-0 left-0 right-0 relative'>
      <div className='container mx-auto px-4 py-4 flex justify-evenly items-center text-white h-[100px]'>
       {/* menu */}
        <div className='flex justify-center items-center gap-[6rem] text-lg'>
          <Link href="/" className='active:font-bold hover:underline'><li>Logo</li></Link>
        </div>
          
        
         
        <div className="md:hidden px-4 py-10 flex flex-wrap justify-left text-white">
        {/* Hamburger */}
          <button onClick={handleClick} className='md:hidden z-10 flex justify-items-start size-10' >
            <img onClick={rotateImage}
            style={{ transform: `rotate(${rotation}deg)` }}
            src={rows_white.src}
            alt=''
             />
          </button>
        </div>
        {/* Mobile menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-white ${
            nav ? "block" : "hidden"
          }`}
        >
            <div className='py-6 text-4xl'>
              <Link href="/">Home</Link>
            </div>
            <div className='py-6 text-4xl'>
              <Link href="/projects">projects</Link>
            </div>
            <div className='py-6 text-4xl'>
              <Link href="/experiences">experiences</Link>
            </div>
            <div className='py-6 text-4xl'>
              <Link href="/contact">contact</Link>
            </div>
                
        </div>
        </div>
      </nav>
  )
}

export default Navbar;
