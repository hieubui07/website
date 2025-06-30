"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Home from "../home/page";
import Experience from "../experience/page";
import Projects from "../projects/page";
import Contact from "../contact/page";
import Loader from "./Loader"; // Import the loader component

export default function Hero() {
  const router = useRouter();
  const pathname = usePathname();
  const [typedText, setTypedText] = useState("");
  const [showContinueButton, setShowContinueButton] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fullText = "hello, i'm Hieu Bui";
  const title = "Software Engineer";

  // Determine what to show based on current pathname
  const showIntroSection = pathname === "/" && showContinueButton && !isLoading;
  const showNav = (pathname !== "/" || !showContinueButton) && !isLoading;
  const showHome = pathname === "/" && !showContinueButton && !isLoading;
  const showExperience = pathname === "/experience" && !isLoading;
  const showProjects = pathname === "/projects" && !isLoading;
  const showContact = pathname === "/contact" && !isLoading;

  const finishLoading = () => {
    setIsLoading(false);
  };

  const handleExperience = () => {
    router.push("/experience");
  };

  const handleContinue = () => {
    setShowContinueButton(false);
    // Stay on home page but hide intro section
  };

  const handleHome = () => {
    router.push("/");
    setShowContinueButton(false); // Skip intro when navigating back
  };

  const handleProjects = () => {
    router.push("/projects");
  };

  const handleContact = () => {
    router.push("/contact");
  };

  useEffect(() => {
    if (typedText.length < fullText.length && !isLoading) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText, isLoading]);

  // Reset continue button when navigating to home from other pages
  useEffect(() => {
    if (pathname !== "/") {
      setShowContinueButton(false);
    }
  }, [pathname]);

  // Show loader only on initial page load
  if (isLoading) {
    return <Loader finishLoading={finishLoading} />;
  }

  return (
    <div className="container relative min-h-screen bg-background text-white theme-transition">
      {showNav && (
        <div className="bg-black">
          <Navbar
            handleHome={handleHome}
            handleExperience={handleExperience}
            handleProjects={handleProjects}
            handleContact={handleContact}
          />
        </div>
      )}

      {showHome && <Home />}
      {showExperience && <Experience />}
      {showProjects && <Projects />}
      {showContact && <Contact />}

      {/* Intro Section - only shows when on home page with continue button */}
      {showIntroSection && (
        <div
          id="home"
          className="w-[75%] md:w-[60%] z-[1] flex flex-col justify-center relative mx-auto items-center"
        >
          <div className="flex flex-col justify-center items-center gap-8 h-[100vh] text-foreground">
            <motion.h1
              className="text-[15px] text-foreground theme-transition"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {typedText}
              {typedText.length < fullText.length && (
                <motion.span
                  className="text-foreground"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  |
                </motion.span>
              )}
            </motion.h1>
            <motion.h2
              className="text-foreground theme-transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {title}
            </motion.h2>
            {showContinueButton && (
              <motion.button
                onClick={handleContinue}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="nes-btn is-primary theme-transition hover:scale-105 active:scale-95"
              >
                Continue
              </motion.button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
