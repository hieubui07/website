import React from "react";
import { motion } from "framer-motion";

function Home() {
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

  // Header animation
  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  // Text animation
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      id="home"
      className="w-[70%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="font-semibold mb-4 text-[14px] text-center text-[#4285F4]"
        variants={headerVariants}
      >
        About Me
      </motion.h1>
      <motion.p
        className="text-[12px] mb-0 leading-6 text-white"
        variants={textVariants}
      >
        I'm a developer and problem solver. I like to build products and help
        people in every way possible. I love to learn and try new things! In my
        free time, I like to explore new places, find new coffee shops, travel,
        play sports, take photos, and do anything productive!
      </motion.p>
    </motion.div>
  );
}

export default Home;
