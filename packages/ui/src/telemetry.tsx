import React from 'react';

export interface TraceStep {
  id: string;
  name: string;
  duration: string;
  percentage: number;
}

export const MyndTraceWaterfall = ({ steps }: { steps: TraceStep[] }) => {
  return (
    <div className="w-full rounded-xl border border-white/[0.06] bg-[#09090b] p-4 font-sans">
      <h3 className="mb-4 text-xs font-semibold tracking-wider text-neutral-400 uppercase">Live Pipeline Execution Trace</h3>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center justify-between text-xs">
            <span className="w-1/4 font-mono text-neutral-300 truncate">{step.name}</span>
            <div className="relative h-1.5 w-1/2 rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                style={{ width: `${step.percentage}%` }}
              />
            </div>
            <span className="w-1/6 text-right font-mono text-neutral-500">{step.duration}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
