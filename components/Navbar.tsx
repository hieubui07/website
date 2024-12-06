"use client"
import React, {useState} from 'react'
import Link from "next/link";
import rows_white from "@/components/assets/rows_white.png"
import NavLink from '@/components/NavLink';
import Image from 'next/image';
import MenuOverlay from '@/components/MenuOverlay';

const navLinks = [
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Resume",
        path: "#resume",
    },
    {
        title: "Contact",
        path: "#contact",
    },

];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleClick = () => setNavbarOpen(!navbarOpen);
    const [rotation, setRotation] = useState(0);

    const rotateImage = () => {
        setRotation(rotation + 90);
     };

    return (
    <nav className='fixed mx-auto top-0 left-0 right-0 z-10 bg-opacity-100'>
      <div className=' hidden md:flex flex justify-center h-[100px] text-white bg-opacity-100'>
     {/* menu */}
        <div className='flex justify-center items-center gap-[6rem] text-lg'>
          <Link 
            href="/" 
            className='active:font-bold hover:underline-offset-8'
          >
              Home
          </Link>
          <div id='navbar' className='menu hidden md:block md:w-auto'>
            <ul className='hidden md:flex flex flex-row gap-[6rem] text-white'>
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title}/>
                    </li>
                ))}
            </ul>
          </div>
          </div>
          </div>
          <div className="md:hidden px-4 py-10 flex justify-left text-white bg-opacity-100">
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 flex justify-items-start size-10 ' >
              <Image onClick={rotateImage}
              style={{ transform: `rotate(${rotation}deg)` }}
              src={rows_white}
              alt=''
               />
            </div>
            <ul className={!navbarOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-white'}>
              {/* Mobile menu */}
                {navLinks.map((link, index) => (
                    <li key={index} className='py-6 text-4xl'>
                        <NavLink href={link.path} title={link.title}/>
                    </li>
                ))}
            </ul>
          </div>   
          
          
        
      
      
      
    </nav>
  )
}

export default Navbar;
