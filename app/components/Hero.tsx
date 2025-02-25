"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import github from "@/components/pages/logo/githubicon.png";
import gmail from "@/components/pages/logo/gmailicon.png";
import linkedin from "@/components/pages/logo/linkedinicon.png";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Navbar from './Navbar';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function Hero (){
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [showButton, setShowButton] = useState(true); // for toggling pages
  const [showNav, setShowNav] = useState(false); // fade animation
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);  
  const fullText = "hello, i'm Hieu Bui";
  
  const handleAboutMe = () => {
    setShowAboutMe(true);
    setShowNav(true);
    setShowButton(false);
    setShowContact(false);
    setShowProjects(false);

  };

  const handleContinue = () => {
    setShowButton(false);
    setShowNav(true);
  };

  const handleHome = () => {
    setShowButton(true);
    setShowNav(false);
    setShowAboutMe(false);
    setShowProjects(false);
    setShowContact(false);
  };

  const handleProjects = () => {
    setShowNav(true);
    setShowAboutMe(false);
    setShowProjects(true);
    setShowContact(false);
    setShowButton(false);
  }

  const handleContact = () => {
    setShowNav(true);
    setShowAboutMe(false);
    setShowProjects(false);
    setShowContact(true);
    setShowButton(false);
  }

  useEffect(() => {
    if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
            setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
    }
}, [typedText, fullText]);

  return (

    <div className="container">
      
        {/*}
          <nav className="flex justify-center top-[40px] w-full relative z-10">
            <ul className='flex justify-center gap-8 text-[12px] text-black mb-0'>
              <li onClick = {handleHome} style = {{cursor: "pointer"}}>Home</li>
              <li onClick={handleAboutMe} style={{ cursor: "pointer" }}>About Me</li>
              <li onClick={handleProjects} style={{ cursor: "pointer" }}>Projects</li>
              <li onClick={handleContact} style={{ cursor: "pointer" }}>Contact</li>
            </ul>
          </nav>
        */}
        {showNav && (
        <Navbar
          handleHome={handleHome}
          handleAboutMe={handleAboutMe}
          handleProjects={handleProjects}
          handleContact={handleContact}
        />
      )}
      
      {showAboutMe && <Experience />}
      {showProjects && <Projects />}
      {showContact && <Contact />}
      {showButton &&  (
       
          <div id="home" className=" w-[75%] md:w-[60%] z-[1] h-[calc(100vh_-_8rem_-_35px)] flex flex-col justify-center relative mx-auto items-center">
          <div className='flex flex-col justify-center items-center gap-8'>

          <h1>{fullText}</h1>
          
          {showButton && (
            
            <button onClick={handleContinue} className={showNav ? "fade-out" : ""}>
                Continue
            </button>
          )}
        </div>
        </div>
      )}
        </div>
      
  );
}