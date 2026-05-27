import React from 'react';

export const MyndAgentCanvas = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-[#030303]"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}
    >
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-[#09090b] px-3 py-1.5 text-xs font-medium text-neutral-400 font-sans shadow-lg shadow-black/50">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
        Agent Engine Node Blueprint Map
      </div>
      {children}
    </div>
  );
};
