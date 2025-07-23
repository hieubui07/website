"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "./Navbar";
import About from "../about/page";
import Experience from "../experience/page";
import Projects from "../projects/page";
import Contact from "../contact/page";
import Loader from "./Loader";

export default function Hero() {
  const router = useRouter();
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
  };

  // Typewriter effect with all three running simultaneously
  const phrases = [
    { text: "an Analyst", color: "#4285F4" },
    { text: "a Developer", color: "#EA4335" },
    { text: "a Learner", color: "#34A853" },
  ];
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const [currentText, setCurrentText] = useState<string>("");
  const [visibleText, setVisibleText] = useState<string>("");

  // Combined typewriter effect
  useEffect(() => {
    if (pathname === "/" && !isLoading) {
      const message = "Hello World!";
      const name = "Hieu";
      const typingSpeed = 200;

      // Reset states
      setVisibleText("");
      setCurrentText("");
      setIndex(0);
      setFade(true);

      // Type "Hello World!" first
      let messageIndex = 0;
      const messageInterval = setInterval(() => {
        if (messageIndex < message.length) {
          setVisibleText(message.slice(0, messageIndex + 1));
          messageIndex++;
        } else {
          clearInterval(messageInterval);

          // After message is complete, start typing name
          setTimeout(() => {
            let nameIndex = 0;
            const nameInterval = setInterval(() => {
              if (nameIndex < name.length) {
                setCurrentText(name.slice(0, nameIndex + 1));
                nameIndex++;
              } else {
                clearInterval(nameInterval);

                // After name is complete, start phrase cycling
                setTimeout(() => {
                  const phraseInterval = setInterval(() => {
                    setFade(false);
                    setTimeout(() => {
                      setIndex(
                        (currentIndex) => (currentIndex + 1) % phrases.length
                      );
                      setFade(true);
                    }, 600); // Fade transition time (how long between fade out and fade in)
                  }, 3500); // Total time each phrase is displayed

                  // Store phrase interval for cleanup
                  return () => clearInterval(phraseInterval);
                }, 500);
              }
            }, typingSpeed);

            return () => clearInterval(nameInterval);
          }, 500);
        }
      }, typingSpeed);

      return () => {
        clearInterval(messageInterval);
      };
    }
  }, [pathname, isLoading]);

  // Show pages regardless of loading state (except home page during loading)
  const handleHome = () => router.push("/");
  const handleAbout = () => router.push("/about");
  const handleExperience = () => router.push("/experience");
  const handleProjects = () => router.push("/projects");
  const handleContact = () => router.push("/contact");

  const showAbout = pathname === "/about" && !isLoading;
  const showExperience = pathname === "/experience" && !isLoading;
  const showProjects = pathname === "/projects" && !isLoading;
  const showContact = pathname === "/contact" && !isLoading;
  // Only show loader when on home page and loading
  if (isLoading) {
    return <Loader finishLoading={finishLoading} />;
  }

  return (
    <div className="container relative min-h-screen bg-background text-white theme-transition">
      {/* Navbar is always shown */}
      <div className="bg-black">
        <Navbar
          handleHome={handleHome}
          handleAbout={handleAbout}
          handleExperience={handleExperience}
          handleProjects={handleProjects}
          handleContact={handleContact}
        />
      </div>

      {/* Conditionally show section content */}
      {showAbout && <About />}
      {showExperience && <Experience />}
      {showProjects && <Projects />}
      {showContact && <Contact />}

      {/* Home page with typewriter */}
      {pathname === "/" && (
        <motion.div
          className="flex flex-col text-[16px] text-white font-normal h-[calc(100vh_-_8rem_-_35px)] w-full justify-center items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="grid grid-cols-2 justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-right -translate-x-12">{`>`}&nbsp;</span>
            <span
              className={`text-left -translate-x-12 duration-700 inline-block ${visibleText} hover:text-blue-400 cursor-pointer transition-colors`}
              onMouseEnter={() => console.log("Hello World!")}
            >
              {visibleText}
              <span className="animate-pulse">_</span>
            </span>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 justify-center my-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-right">My na</span>
            <span
              className={`text-left transition-opacity duration-100 inline-block ${currentText}`}
            >
              me is{" "}
              <span
                className={`text-[#FBBC04] ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {currentText}
              </span>
            </span>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-right">I am&nbsp;</span>
            <motion.span
              className={`text-left transition-all duration-700 ease-in-out cursor-pointer hover:scale-110 hover:drop-shadow-[0_0_12px_currentColor] ${
                fade ? "opacity-100" : "opacity-0"
              }`}
              style={{ color: phrases[index].color }}
              key={phrases[index].text}
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => {
                // Cycle to next phrase immediately on click
                setFade(false);
                setTimeout(() => {
                  setIndex(
                    (currentIndex) => (currentIndex + 1) % phrases.length
                  );
                  setFade(true);
                }, 300);
              }}
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 12px currentColor",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {phrases[index].text}
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
