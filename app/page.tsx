"use client"

import StarsBackground from "@/components/ui/stars-background";
import ShootingStars from "@/components/ui/shooting-stars";


export default function Home() {
  return (
    <div className="h-screen w-full  bg-slate-900 ">
      <StarsBackground/>
      <ShootingStars/>
      
    </div>
  );
}
