"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MyndCommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-white/[0.08] bg-[#09090b] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9)]"
          >
            <input
              type="text"
              placeholder="Search MYND modules, AI tools, or execute pipelines... (Cmd+K)"
              className="w-full border-b border-white/[0.06] bg-transparent p-4 text-sm text-neutral-200 outline-none placeholder:text-neutral-500 font-sans"
            />
            <div className="p-3 text-[11px] text-neutral-500 flex gap-4 font-mono bg-white/[0.01]">
              <span><b className="text-neutral-400">/run-agent</b> Activate AI Instance</span>
              <span><b className="text-neutral-400">/network</b> View Logs</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
