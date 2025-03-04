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
import Home from '../home/page';
import Experience from '../experience/page';
import Projects from '../projects/page';
import Contact from '../contact/page';

// Ensure that these imports are valid React components

export default function Hero (){
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [showButton, setShowButton] = useState(true); // for toggling pages
  const [showNav, setShowNav] = useState(false); // fade animation
  const [showHome, setShowHome] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setShowContact] = useState(false);  
  const fullText = "hello, i'm Hieu Bui";
  const title = "Software Engineer";
  
  const handleExperience = () => {
    setShowExperience(true);
    setShowNav(true);
    setShowButton(false);
    setShowContact(false);
    setShowProjects(false);
    setShowHome(false);
  };

  const handleContinue = () => {
    setShowButton(false);
    setShowNav(true);
    setShowHome(true);
  };
  
  const handleHome = () => {
    setShowButton(false);
    setShowNav(true);
    setShowExperience(false);
    setShowProjects(false);
    setShowContact(false);
    setShowHome(true);
  };
  
  const handleProjects = () => {
    setShowNav(true);
    setShowExperience(false);
    setShowProjects(true);
    setShowContact(false);
    setShowButton(false);
    setShowHome(false);
  }

  const handleContact = () => {
    setShowNav(true);
    setShowExperience(false);
    setShowProjects(false);
    setShowContact(true);
    setShowButton(false);
    setShowHome(false);
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
      {showNav && (
      <Navbar
        handleHome={handleHome}
        handleExperience={handleExperience}
        handleProjects={handleProjects}
        handleContact={handleContact}
      />
      )}
      {showHome && <Home />}
      {showExperience && <Experience />}
      {showProjects && <Projects />}
      {showContact && <Contact />}
      {showButton &&  (
        <div id="home" className=" w-[75%] md:w-[60%] z-[1] flex flex-col justify-center relative mx-auto items-center">
          <div className='flex flex-col justify-center items-center gap-8 h-[100vh]'>
            <h1>{fullText}</h1>
            <h2>{title}</h2>
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