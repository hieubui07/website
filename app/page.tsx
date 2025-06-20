import React from "react";
import Hero from "@/app/components/Hero";
import ThemeToggle from "./components/ThemeToggle";

import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ThemeToggle />
      <Footer />
    </>
  );
}
