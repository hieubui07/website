"use client";

import React from "react";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: "1",
    title: "onetimeimages",
    description:
      "A website designed to upload an image to a cloud server where you can retrieve or delete it.",
    link: "https://hackutd2024.vercel.app/",
  },
  {
    id: "2",
    title: "Welfare for Workers",
    description:
      "A friendly user website designed for construction workers to find the nearest psychiatrists.",
    link: "https://hacktx23-welfareforworkers.streamlit.app/",
  },
  {
    id: "3",
    title: "AutoRemind",
    description: "A website used to track car maintenance and services.",
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
        staggerChildren: 0.2,
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
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  // Project item animations
  const projectVariants = {
    hidden: { x: -30, opacity: 0 },
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
      borderRadius: "8px",
      transition: { duration: 0.2 },
    },
  };

  // Description text animation
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  // Link animation
  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#4361ee",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.div
      id="projects"
      className="w-[75%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center m-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="font-semibold text-white mb-4 text-[14px] text-center"
        variants={headerVariants}
      >
        Projects
      </motion.h1>

      {projectsData.map((project) => (
        <motion.div
          key={project.id}
          className="text-white py-4 px-3 w-full flex flex-col md:flex-row justify-between space-y-2 md:space-y-0"
          variants={projectVariants}
          whileHover="hover"
        >
          <div className="flex flex-row">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[180px] text-blue-700 hover:underline text-[12px]"
              whileHover="hover"
              whileTap="tap"
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
            className="flex justify-start text-[13px] text-black"
            variants={descriptionVariants}
          >
            {project.description}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Page;
