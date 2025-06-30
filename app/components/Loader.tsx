import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CustomLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
);

interface LoaderProps {
  finishLoading: () => void;
}

const Loader = ({ finishLoading }: LoaderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);

    // Auto finish loading after animation completes
    const finishTimeout = setTimeout(() => {
      finishLoading();
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(finishTimeout);
    };
  }, [finishLoading]);

  return (
    <>
      <style jsx>{`
        @keyframes drawPath {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }
      `}</style>

      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: isMounted ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-24 h-24 md:w-32 md:h-32"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <CustomLogo />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Loader;
