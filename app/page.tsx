"use client"

import Hero from "@/components/Hero";
import StarsBackground from "@/components/ui/stars-background";
import ShootingStars from "@/components/ui/shooting-stars";

export default function Home() {
  return (
    <div className=" bg-slate-900 ">
      <Hero/>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
