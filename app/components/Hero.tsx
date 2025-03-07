"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Home from "../home/page";
import Experience from "../experience/page";
import Projects from "../projects/page";
import Contact from "../contact/page";
import Link from "next/link";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [showButton, setShowButton] = useState(true);
  const [showNav, setShowNav] = useState(false);
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
  };

  const handleContact = () => {
    setShowNav(true);
    setShowExperience(false);
    setShowProjects(false);
    setShowContact(true);
    setShowButton(false);
    setShowHome(false);
  };

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
      {showButton && (
        <div
          id="home"
          className="w-[75%] md:w-[60%] z-[1] flex flex-col justify-center relative mx-auto items-center"
        >
          <div className="flex flex-col justify-center items-center gap-8 h-[100vh]">
            <motion.h1
              className="text-[15px]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {typedText}
              {typedText.length < fullText.length && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  |
                </motion.span>
              )}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {title}
            </motion.h2>

            {showButton && (
              <motion.button
                onClick={handleContinue}
                className={showNav ? "fade-out" : ""}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/">Continue</Link>
              </motion.button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
