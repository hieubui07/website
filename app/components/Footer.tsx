import React from 'react'
import Image from 'next/image';
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='z-[1] h-[4vh] mt-6 relative w-full gap-5 flex justify-center items-center'>
      <a href='https://www.linkedin.com/in/hbui0107/'target='blank'>
        <FiLinkedin color='white' size='1.5rem'/>
      </a>
      <a href='https://mail.google.com/mail/u/1/?fs=1&to=hieubui0107@gmail.com&tf=cm'target='blank'>
        <FiMail color='white' size='1.5rem'/>
      </a>
      <a href='https://github.com/hieubui07'target='blank'>
          <FiGithub color='white' size='1.5rem'/>
      </a>
    </div>
  )
}

export default Footer;
