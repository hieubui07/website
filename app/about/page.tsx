"use client";

import React from "react";
import Image from "next/image";

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
          I love to build different lego sets, especially different cars, random
          Daiso animal sets, and Pokemon ones.
        </p>
      </div>
    </main>
  );
}

export default About;
