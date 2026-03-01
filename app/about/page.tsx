import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About",
};

function About() {
  return (
    <main
      id="about"
      className="h-auto mx-auto flex max-w-2xl flex-1 flex-col gap-16 leading-[1.6] py-16 sm:py-32"
    >
      <div className="flex flex-col gap-6 px-4 ">
        <Image
          src="/img/astronaut.jpg"
          alt="Me"
          width={60}
          height={60}
          draggable={false}
          className="mb-8 rounded-full select-none"
        />
        <p className="text-[var(--text-color-secondary)] text-2xl font-medium text-pretty">
          I recently graduated from the University of Houston with a
          Bachelor&apos;s degree in Computer Science
        </p>

        <p className="text-[var(--text-color-secondary)] text-2xl font-medium text-pretty">
          When not working, I enjoy playing and watching sports especially
          soccer. I also like to photography, travel and explore new places.
        </p>

        <p className="text-[var(--text-color-secondary)] text-2xl font-medium text-pretty">
          I love to build different lego sets, especially Technic cars, random
          Daiso animal sets, and Pokemon ones.
        </p>
      </div>
      <div className="flex flex-row gap-6 px-4 text-[var(--text-color-tertiary)]">
        <a href="https://www.linkedin.com/in/hbui0107/" target="blank">
          <FiLinkedin size="32px" />
        </a>
        <a
          href="https://mail.google.com/mail/u/1/?fs=1&to=hieubui0107@gmail.com&tf=cm"
          target="blank"
        >
          <FiMail size="32px" />
        </a>
        <a href="https://github.com/hieubui07" target="blank">
          <FiGithub size="32px" />
        </a>
      </div>
    </main>
  );
}

export default About;
