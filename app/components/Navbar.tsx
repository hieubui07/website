"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import rows_white from "@/public/assets/rows_white.png";
import Image from "next/image";

import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  handleHome: () => void;
  handleAbout: () => void;
  handleExperience: () => void;
  handleProjects: () => void;
  handleContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  handleHome,
  handleAbout,
  handleExperience,
  handleProjects,
  handleContact,
}) => {
  const [nav, setNav] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activePage, setActivePage] = useState("/");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Set active page based on current path
  useEffect(() => {
    if (pathname) {
      setActivePage(pathname);
    }
  }, [pathname]);

  const handleClick = () => {
    setNav(!nav);
    setRotation(rotation + 90);
  };

  const handleClose = (href: string, action: () => void) => {
    setNav(false);
    setRotation(0);
    setActivePage(href);
    action?.();
    router.push(href);
  };

  const navItems = [
    {
      name: "About",
      action: handleAbout,
      href: "/about",
      hoverColor: "#4285F4",
    }, // Blue
    {
      name: "Experience",
      action: handleExperience,
      href: "/experience",
      hoverColor: "#EA4335",
    }, // Red
    {
      name: "Projects",
      action: handleProjects,
      href: "/projects",
      hoverColor: "#FBBC04",
    }, // Yellow
    {
      name: "Contact",
      action: handleContact,
      href: "/contact",
      hoverColor: "#34A853",
    }, // Green
  ];

  return (
    <nav className="relative top-0 left-0 right-0 z-10">
      <div className="w-full h-[100px] drop-shadow-lg">
        <div className="flex items-center justify-between w-full h-full px-6">
          {/* Logo - positioned at left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Link
              href="/" // Changed from "/landing" to "/"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("/");
                handleHome();
                router.push("/");
              }}
              className="no-underline"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                >
                  <defs>
                    <style>
                      {`
                        @keyframes drawPath {
                          to {
                            stroke-dashoffset: 0;
                          }
                        }
                      `}
                    </style>
                  </defs>
                  <path
                    d="M 70 90 
                      L 100 70 L 100 35
                      L 45 70 L 45 135
                      L 70 160 L 70 120 
                      L 130 80 L 130 45
                      L 155 70 L 155 132
                      L 100 170 L 100 135
                      L 130 115 
                      "
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="10"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    style={{
                      animation: "drawPath 2s ease-in-out forwards",
                    }}
                  />
                </svg>
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex justify-center items-center flex-1">
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-between items-center gap-8 text-[12px] mb-0"
            >
              {navItems.map((item, index) => {
                const isActive = activePage === item.href;
                const isHovered = hoveredItem === item.name;
                return (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.1, // Staggered animation
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActivePage(item.href);
                        item.action();
                      }}
                      className="no-underline"
                      style={{ textDecoration: "none" }}
                    >
                      <span
                        className={`relative group no-underline ${
                          isActive ? "" : ""
                        }`}
                        style={{
                          textDecoration: "none",
                          color: "white",
                        }}
                      >
                        {item.name}
                      </span>
                    </Link>
                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-[-4px] left-0 h-[2px] w-full"
                        style={{ backgroundColor: item.hoverColor }}
                        layoutId="activeIndicator"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* Hover underline - only show when not active and hovered */}
                    {!isActive && (
                      <motion.span
                        className="absolute bottom-[-4px] left-0 h-[2px]"
                        style={{ backgroundColor: item.hoverColor }}
                        initial={{ width: "0%" }}
                        animate={{ width: isHovered ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          {/* Mobile Menu Button - positioned at top right */}
          <motion.div
            className="md:hidden cursor-pointer ml-auto"
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <Image src={rows_white} alt="Menu" height={40} width={40} />
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "90vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full md:hidden flex flex-col justify-center items-center bg-black text-white z-10 overflow-hidden"
            >
              {/* Mobile Navigation Items */}
              <ul className="flex flex-col justify-center items-center flex-1">
                {navItems.map((item, index) => {
                  const isActive = activePage === item.href;
                  return (
                    <motion.li
                      key={item.name}
                      className="py-8 text-center relative"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <motion.button
                        onClick={() => handleClose(item.href, item.action)}
                        className={`text-[20px] no-underline transition-colors ${
                          isActive
                            ? "text-white font-medium"
                            : "text-gray-300 hover:text-white"
                        }`}
                        style={{ textDecoration: "none" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.name}
                      </motion.button>
                      {isActive && (
                        <motion.div
                          className="h-[2px] mt-1 mx-auto bg-white"
                          layoutId="mobileActiveIndicator"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
