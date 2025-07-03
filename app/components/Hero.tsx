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
    { text: "an Analyst", color: "text-blue-600" },
    { text: "a Developer", color: "text-green-600" },
    { text: "a Learner", color: "text-purple-600" },
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
                    }, 500);
                  }, 3000);

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
        <div className="flex flex-col text-[16px] text-white font-normal h-[calc(100vh_-_8rem_-_35px)] w-full justify-center text-center">
          <div className="flex justify-center">
            <span className="flex-1 text-right -translate-x-12">
              {`>`}&nbsp;
            </span>
            <span
              className={`flex-1 text-left -translate-x-12 duration-700 inline-block ${visibleText}`}
            >
              {visibleText}
              <span className="animate-pulse">_</span>
            </span>
          </div>
          <div className="flex justify-center my-6">
            <span className="flex-1 text-right">My na</span>
            <span
              className={`flex-1 text-left transition-opacity duration-100 inline-block ${currentText}`}
            >
              me is{" "}
              <span
                className={`text-blue-400 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {currentText}
              </span>
            </span>
          </div>

          <div className="flex justify-center">
            <span className="flex-1 text-right">I am&nbsp;</span>
            <span
              className={`flex-1 text-left transition-opacity duration-700 inline-block ${
                fade ? "opacity-100" : "opacity-0"
              } ${phrases[index].color}`}
            >
              {phrases[index].text}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
