"use client"

import React from "react";
import Hero from "@/components/pages/Hero";
import Navbar from "@/components/Navbar";

import ShootingStars from "@/components/ui/shooting-stars";
import StarsBackground from "@/components/ui/stars-background";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <div className='absolute top-0 left-0 w-full h-full z-[0]'>
        <ShootingStars />
        <StarsBackground />
      </div>
      <Navbar/>
      <Hero/>
    </main>
  );
}
