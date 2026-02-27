"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiLinkedin, FiMail, FiGithub } from "react-icons/fi";

const routeNames: Record<string, string> = {
  "/about": "About",
  "/writing": "Writing",
  "/projects": "Projects",
  "/experience": "Experience",
};

interface NavItem {
  label: string;
  href: string;
  section: "main" | "projects";
  isActive: (pathname: string) => boolean;
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    section: "main",
    isActive: (p) => p === "/",
  },
  {
    label: "About",
    href: "/about",
    section: "main",
    isActive: (p) => p === "/about",
  },
  {
    label: "Writing",
    href: "/writing",
    section: "main",
    isActive: (p) => p.startsWith("/writing"),
  },
  {
    label: "Projects",
    href: "/projects",
    section: "main",
    isActive: (p) => p.startsWith("/projects"),
  },
  {
    label: "Experience",
    href: "/experience",
    section: "main",
    isActive: (p) => p.startsWith("/experience"),
  },
];

const mainItems = navItems.filter((i) => i.section === "main");
const projectItems = navItems.filter((i) => i.section === "projects");

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentPage = routeNames[pathname];

  return (
    <>
      {/* Top Bar */}
      <div className="sticky top-0 z-50 flex h-14 items-center gap-2 px-3 bg-white dark:bg-black">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex select-none cursor-pointer items-center justify-center h-[36px] w-[36px] rounded-full hover:bg-black/[0.08] dark:hover:bg-white/[0.12] transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FiX className="w-5 h-5 text-black dark:text-white" />
          ) : (
            <FiMenu className="w-5 h-5 text-black dark:text-white" />
          )}
        </button>

        {/* Breadcrumb - only show when not on home page */}
        {pathname !== "/" && (
          <div className="flex items-center gap-2 p-2 text-base font-medium">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-[var(--text-color-primary)] transition-opacity"
            >
              Hieu Bui
            </Link>
            {currentPage && (
              <>
                <span className="text-[var(--text-color-quaternary)] p-1">
                  /
                </span>
                <Link
                  href={pathname}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--text-color-primary)] transition-opacity"
                >
                  {currentPage}
                </Link>
              </>
            )}
          </div>
        )}
      </div>

      {/* Full Screen Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-11 z-20 flex flex-col bg-white dark:bg-black"
          onClick={() => setIsOpen(false)}
        >
          <nav
            className="flex flex-col h-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Section */}
            <div className="flex flex-col gap-1 mb-6">
              {mainItems.map((item) => {
                const isActive = item.isActive(pathname);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`py-2 text-xl font-semibold transition-colors ${
                      isActive
                        ? "text-[var(--text-color-primary)]"
                        : "text-[var(--text-color-tertiary)] hover:text-[var(--text-color-primary)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Click-away spacer — grows to fill space */}
            <div className="flex-1" onClick={() => setIsOpen(false)} />

            {/* Social Icons — pinned to bottom */}
            <div className="flex gap-4 pb-0 text-[var(--text-color-tertiary)]">
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
          </nav>
        </div>
      )}
    </>
  );
}
