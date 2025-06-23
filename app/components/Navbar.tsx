"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import rows_white from "@/public/assets/rows_white.png";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  handleHome: () => void;
  handleExperience: () => void;
  handleProjects: () => void;
  handleContact: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  handleHome,
  handleExperience,
  handleProjects,
  handleContact,
}) => {
  const [nav, setNav] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [activePage, setActivePage] = useState("/");
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
    { name: "Home", action: handleHome, href: "/" },
    { name: "Experience", action: handleExperience, href: "/experience" },
    { name: "Projects", action: handleProjects, href: "/projects" },
    { name: "Contact", action: handleContact, href: "/contact" },
  ];

  return (
    <nav className="relative top-0 left-0 right-0 z-10">
      <div className="w-full h-[100px] drop-shadow-lg">
        <div className="pl-6 md:p-0 flex items-center justify-between w-full h-full">
          {/* Mobile Menu Button - moved to left */}
          <motion.div
            className="md:hidden cursor-pointer"
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
                          color: "var(--text-color)",
                        }}
                      >
                        {item.name}
                      </span>
                    </Link>
                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-[-4px] left-0 h-[2px] w-full"
                        style={{ backgroundColor: "var(--text-color)" }}
                        layoutId="activeIndicator"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    {/* Hover underline */}
                    {!isActive && (
                      <motion.span
                        className="absolute bottom-[-4px] left-0 h-[2px]"
                        style={{ backgroundColor: "var(--text-color)" }}
                        initial={{ width: "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "90vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full md:hidden flex flex-col justify-center items-center bg-black dark:bg-white text-white z-10 overflow-hidden"
            >
              {/* Mobile Navigation Items */}
              <ul className="flex flex-col justify-center items-center flex-1">
                {navItems.map((item, index) => {
                  const isActive = activePage === item.href;
                  return (
                    <motion.li
                      key={item.name}
                      className="py-8 text-center text-black relative"
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
                        className={`text-[20px] no-underline ${
                          isActive
                            ? "text-white"
                            : "text-black hover:text-white"
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
