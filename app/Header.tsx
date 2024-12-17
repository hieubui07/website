"use client";
import ShootingStars from "@/components/ui/shooting-stars";
import StarsBackground from "@/components/ui/stars-background";
import Navbar from "@/components/Navbar";

export default function Header() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-[0]">
        <ShootingStars />
        <StarsBackground />
      </div>
      <Navbar />
    </>
  );
}