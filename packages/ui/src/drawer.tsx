"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MyndDetailDrawer = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md border-l border-white/[0.06] bg-[#09090b] p-6 shadow-[0_0_50px_rgba(0,0,0,0.8)] text-white font-sans"
          >
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
              <h3 className="text-sm font-semibold tracking-wider text-neutral-200 uppercase">{title}</h3>
              <button onClick={onClose} className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1 text-xs text-neutral-400 hover:text-white transition-all">Close</button>
            </div>
            <div className="space-y-4 overflow-y-auto h-[calc(100%-4rem)]">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
