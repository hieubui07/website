"use client";
import React from "react";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: "1",
    place: "Peterbilt Motors Company",
    title: "Technology Intern",
    date: "May 2025 - Present",
  },
  {
    id: "2",
    place: "University of Houston",
    title: "Teaching Assistant",
    date: "Aug 2024 - May 2025",
  },
  {
    id: "3",
    place: "University of Houston",
    title: "Information Technology",
    date: "May 2023 - Aug 2024",
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

  // Header animations with text reveal
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

  // Animation for letters in place/company
  const letterVariants = {
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

  // Item animations
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    hover: {
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      transition: { duration: 0.2 },
    },
  };

  // Title text animation
  const titleVariants = {
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

  // Date text animation
  const dateVariants = {
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
      id="experience"
      className="w-[70%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Experience */}
      <motion.h1
        className="font-semibold text-[#EA4335] mb-4 text-[14px] text-center"
        variants={headerVariants}
      >
        Experience
      </motion.h1>

      {experienceData.map((experience) => (
        <motion.div
          key={experience.id}
          className="text-black text-[12px] flex flex-row justify-between rounded-md mb-2"
          variants={itemVariants}
          whileHover="hover"
        >
          <div className="flex flex-col justify-start pb-2">
            <div className="text-[#EA4335] pb-2">
              {experience.place.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <motion.div
              className="text-[12px] text-white"
              variants={titleVariants}
            >
              {experience.title}
            </motion.div>
          </div>
          <motion.div
            className="flex justify-end text-right pl-6 text-[10px] text-white"
            variants={dateVariants}
          >
            {experience.date}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Page;
