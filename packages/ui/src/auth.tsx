"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const MyndAuthModal = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090b] p-6 shadow-2xl text-white font-sans">
      <motion.div layout transition={{ type: "spring", stiffness: 300, damping: 30 }}>
        <h2 className="text-lg font-bold tracking-tight mb-1">{isSignUp ? "Create your Lab ID" : "Welcome to MYND Labs"}</h2>
        <p className="text-xs text-neutral-400 mb-6">{isSignUp ? "Get instant access to autonomous workspace pipelines." : "Sign in to access secure servers."}</p>

        <div className="space-y-3">
          <input type="email" placeholder="name@domain.com" className="w-full rounded-xl border border-white/[0.06] bg-black p-3 text-xs outline-none placeholder:text-neutral-600 focus:border-indigo-500 transition-colors" />
          <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-white/[0.06] bg-black p-3 text-xs outline-none placeholder:text-neutral-600 focus:border-indigo-500 transition-colors" />
          <button className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 py-3 text-xs font-semibold hover:opacity-90 transition-opacity">Continue</button>
        </div>

        <div className="mt-6 text-center border-t border-white/[0.04] pt-4">
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-xs text-neutral-400 hover:text-white transition-colors">
            {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Request Access"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
