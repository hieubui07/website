"use client"
import React, {useState} from 'react'
import Link from "next/link";
import rows_white from "@/public/assets/rows_white.png"
import Image from 'next/image';
import { li } from 'framer-motion/client';
import { useRouter } from "next/navigation";

interface NavbarProps {
  //handleHome: () => void;
  handleAboutMe: () => void;
  handleProjects: () => void;
  handleContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({handleAboutMe, handleProjects, handleContact }) => {
  const [nav, setNav] = useState(false);
  const [rotation, setRotation] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    setNav(!nav);
    setRotation(rotation + 90);
  };
  //const handleClose =()=> setNav(!nav)
  const handleClose = (href: string, action: () => void) => {
    setNav(false);
    setRotation(0);
    if (action) {
      action();
    }
    router.push(href);
  };

  const navItems = [
    //{ name: "Home", action: handleHome, href: "/" },
    { name: "About Me", action: handleAboutMe, href: "/experience" },
    { name: "Projects", action: handleProjects, href: "/projects" },
    { name: "Contact", action: handleContact, href: "/contact" },
  ];

  return (
    <nav className="relative top-0 left-0 right-0 z-10">
      <div className="w-full h-[100px] drop-shadow-lg">
        <div className="pl-6 md:p-0 flex items-center justify-between md:justify-normal w-full h-full">
          <div className="flex justify-between items-center md:mx-auto">
            <div className="pr-8 font-bold">
              <Link className="text-[20px] text-white" href="/">Logo</Link>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex justify-between items-center gap-8 text-[12px] text-black mb-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-black" onClick={item.action}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden p-6 cursor-pointer' onClick={handleClick}>
            <Image 
              style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.3s ease' }}
              src={rows_white}
              alt='Menu'
              height={40}
              width={40}
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {nav && (
          <ul className="absolute w-full md:hidden flex flex-col justify-center items-center h-[82.7vh] bg-[url(/grass.jpeg)] text-white z-10">
            {navItems.map((item) => (
              <li key={item.name} className="py-8 text-center">
                <button
                  onClick={() => handleClose(item.href, item.action)}
                  className="text-[20px] text-white hover:text-green-400"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;