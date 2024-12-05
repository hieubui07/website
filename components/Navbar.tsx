import React, {useState} from 'react'
import Link from "next/link";
import rows_white from "@/components/assets/rows_white.png"
import NavLink from '@/components/NavLink';
import Image from 'next/image';

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
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [rotation, setRotation] = useState(0);

    const rotateImage = () => {
        setRotation(rotation + 90);
     };

    return (
    <nav>
    <div className='hidden md:flex flex justify-center h-[100px] text-white'>
     {/* menu */}
        <div className='flex justify-center items-center gap-[6rem] text-lg'>
          <Link href="/" className='active:font-bold hover:underline-offset-8'>Home</Link>
          <div id='navbar'>
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

      <div className="md:hidden px-4 py-10 flex justify-left text-white">
      {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 flex justify-items-start size-10' >
          <Image onClick={rotateImage}
          alt='/'
          style={{ transform: `rotate(${rotation}deg)` }}
          src={rows_white.src}
          width={40}
          height={40}
           />
        </div>
      
      {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-black dark:text-white'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Projects</li>
          <li className='py-6 text-4xl'>Resume</li>
        </ul>      
      </div>
    
    </nav>
  )
}

export default Navbar;
