"use client";
import React from "react";
import { motion } from "framer-motion";
import { GrDocumentText } from "react-icons/gr";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

const Contact = () => {
  // Animation variants for container
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

  // Animation variants for children elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Animation variants for social icons
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  };

  return (
    <motion.div
      id="contact"
      className="w-[70%] md:w-[45%] z-[1] h-[calc(100vh_-_8rem_-_35px)] relative flex flex-col justify-center mx-auto text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-[#34A853] font-semibold mb-4 text-[14px] text-center"
        variants={itemVariants}
      >
        Contact
      </motion.h1>

      <motion.div
        className="text-white text-[12px] text-center"
        variants={itemVariants}
      >
        Feel free to connect with or contact me through my socials below!
      </motion.div>

      <motion.div
        className="z-[1] h-[4vh] mt-6 relative w-full gap-6 flex justify-center items-center"
        variants={itemVariants}
      >
        <motion.a
          href="/Hieu_Bui_Resume.pdf"
          target="_blank"
          className="text-black"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <GrDocumentText color="#34A853" size="1.7rem" />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/hbui0107/"
          target="blank"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FiLinkedin color="#34A853" size="1.7rem" />
        </motion.a>

        <motion.a
          href="https://mail.google.com/mail/u/1/?fs=1&to=hieubui0107@gmail.com&tf=cm"
          target="blank"
          variants={iconVariants}
          whileHover="white"
          whileTap="tap"
        >
          <FiMail color="#34A853" size="1.7rem" />
        </motion.a>

        <motion.a
          href="https://github.com/hieubui07"
          target="blank"
          variants={iconVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FiGithub color="#34A853" size="1.7rem" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
