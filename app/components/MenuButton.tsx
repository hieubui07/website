"use client";

import { useState, useEffect } from "react";

export default function MenuButton({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) {
  const [phase, setPhase] = useState<"bars" | "plus" | "x">("bars");

  useEffect(() => {
    if (isOpen) {
      setPhase("plus");
      const t = setTimeout(() => setPhase("x"), 300);
      return () => clearTimeout(t);
    } else {
      setPhase("plus");
      const t = setTimeout(() => setPhase("bars"), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  return (
    <button
      onClick={onClick}
      className="inline-flex select-none cursor-pointer items-center justify-center h-[36px] w-[36px] rounded-full hover:bg-black/[0.08] dark:hover:bg-white/[0.12] transition-colors"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black dark:text-white"
      >
        {/* Top line — full width */}
        <line
          x1="-7"
          y1="0"
          x2="7"
          y2="0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            transform:
              phase === "bars"
                ? "translate(10px, 5px) rotate(0deg)"
                : phase === "plus"
                  ? "translate(10px, 10px) rotate(90deg)"
                  : "translate(10px, 10px) rotate(135deg)",
            transition: "transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        />
        {/* Middle line — full width */}
        <line
          x1="-7"
          y1="0"
          x2="7"
          y2="0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            transform:
              phase === "bars"
                ? "translate(10px, 10px) rotate(0deg)"
                : phase === "plus"
                  ? "translate(10px, 10px) rotate(0deg)"
                  : "translate(10px, 10px) rotate(45deg)",
            transition: "transform 0.3s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        />
        {/* Bottom line — 1/4 shorter */}
        <line
          x1="-7"
          y1="0"
          x2="3.5"
          y2="0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            transform:
              phase === "bars"
                ? "translate(10px, 15px) rotate(0deg)"
                : phase === "plus"
                  ? "translate(10px, 10px) rotate(90deg)"
                  : "translate(10px, 10px) rotate(135deg)",
            opacity: phase === "bars" ? 1 : 0,
            transition:
              "transform 0.3s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.15s ease",
          }}
        />
      </svg>
    </button>
  );
}
