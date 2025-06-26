"use client";

import React from "react";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: "1",
    title: "onetimeimages",
    place: "HackUTD 2024",
    tech: "Next.js, Typescript, PinataAPI",
    link: "https://hackutd2024.vercel.app/",
  },
  {
    id: "2",
    title: "Welfare for Workers",
    place: "HackTX 2023",
    tech: "Streamlit, Python, MS Excel",
    link: "https://hacktx23-welfareforworkers.streamlit.app/",
  },
  {
    id: "3",
    title: "AutoRemind",
    place: "HackUTA 2023",
    tech: "React.js, Javascript, Figma",
    link: "https://github.com/hieubui07/autoremind-hackuta023",
  },
];

function Page() {
  // Main container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  // Header animation with text reveal
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        duration: 0.7,
        delay: 0.2,
      },
    },
  };

  // Animation for letters in the title
  const titleLetterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.2,
      },
    }),
  };

  // Project item animations
  const projectVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transition: { duration: 0.2 },
    },
  };

  // Tech text animation
  const techVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };

  // Place text animation
  const placeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      id="projects"
      className="w-[70%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="font-semibold text-[#FBBC04] mb-4 text-[14px] text-center"
        variants={headerVariants}
      >
        Projects
      </motion.h1>

      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          className="text-black text-[12px] flex flex-row justify-between rounded-md mb-2"
          variants={projectVariants}
          whileHover="hover"
        >
          <div className="flex flex-col justify-start pb-2">
            <div className="text-blue-700 pb-2">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.title.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={titleLetterVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.a>
            </div>
            <motion.div
              className="text-[11px] text-white"
              variants={techVariants}
            >
              {project.tech}
            </motion.div>
          </div>
          <motion.div
            className="flex justify-end text-right pl-6 text-[11px] text-white"
            variants={placeVariants}
          >
            {project.place}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Page;
