"use client";
import React, { useState } from 'react';
import { MyndCommandPalette } from "../../../../packages/ui/src/navigation";
import { MyndAgentCanvas } from "../../../../packages/ui/src/canvas";
import { MyndTraceWaterfall } from "../../../../packages/ui/src/telemetry";
import { MyndDetailDrawer } from "../../../../packages/ui/src/drawer";
import { MyndCodePlayground } from "../../../../packages/ui/src/playground";
import { MyndAuthModal } from "../../../../packages/ui/src/auth";

const runtimeMetrics = [
  { id: "1", name: "Agent Core Boot", duration: "110ms", percentage: 100 },
  { id: "2", name: "CRM Node Mapping", duration: "72ms", percentage: 68 },
  { id: "3", name: "Network Security Handshake", duration: "14ms", percentage: 12 },
  { id: "4", name: "Data Pipeline Ingest", duration: "240ms", percentage: 88 },
  { id: "5", name: "ML Inference Call", duration: "1.2s", percentage: 45 },
];

export default function MyndDashboardRoot() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showAuthOverlay, setShowAuthOverlay] = useState(false);

  return (
    <div className="flex h-screen w-screen bg-[#030303] text-white overflow-hidden font-sans antialiased">
      {/* Global Shortcut Palette Overlay */}
      <MyndCommandPalette />

      {/* Slide-out Panel Instance */}
      <MyndDetailDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} title="Agent Alpha Diagnostics">
        <div className="space-y-4 text-xs text-neutral-400 leading-relaxed">
          <div className="p-3 rounded-lg border border-white/[0.06] bg-black font-mono text-neutral-300">
            <span className="text-indigo-400">UUID:</span> mynd-instance-90x2b-alpha
          </div>
          <p>This node handles memory consolidation pipelines and logs real-time transactions into the CRM module grid.</p>
          <MyndCodePlayground />
        </div>
      </MyndDetailDrawer>

      {/* Auth Overlay */}
      {showAuthOverlay && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="relative">
            <button
              onClick={() => setShowAuthOverlay(false)}
              className="absolute -top-3 -right-3 z-10 h-7 w-7 rounded-full border border-white/[0.06] bg-[#09090b] text-neutral-400 hover:text-white text-xs flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <MyndAuthModal />
          </div>
        </div>
      )}

      {/* Navigation Dock */}
      <aside className="w-16 h-full border-r border-white/[0.06] bg-[#09090b] flex flex-col items-center py-5 justify-between z-20">
        <div className="flex flex-col gap-5 w-full items-center">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm tracking-tighter shadow-md">M</div>
          <nav className="flex flex-col gap-3 mt-4">
            <button className="h-9 w-9 rounded-lg bg-white/[0.06] text-white flex items-center justify-center text-sm transition-colors">🤖</button>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="h-9 w-9 rounded-lg text-neutral-400 hover:bg-white/[0.03] hover:text-white flex items-center justify-center text-sm transition-colors"
              title="Agent Diagnostics"
            >
              📊
            </button>
            <button
              onClick={() => setShowAuthOverlay(!showAuthOverlay)}
              className="h-9 w-9 rounded-lg text-neutral-400 hover:bg-white/[0.03] hover:text-white flex items-center justify-center text-sm transition-colors"
              title="Toggle Identity Portal"
            >
              🔐
            </button>
            <button className="h-9 w-9 rounded-lg text-neutral-400 hover:bg-white/[0.03] hover:text-white flex items-center justify-center text-sm transition-colors" title="Canvas">◈</button>
            <button className="h-9 w-9 rounded-lg text-neutral-400 hover:bg-white/[0.03] hover:text-white flex items-center justify-center text-sm transition-colors" title="Pipelines">◉</button>
          </nav>
        </div>
        <div className="h-8 w-8 rounded-full bg-neutral-900 border border-white/[0.08] flex items-center justify-center text-xs font-mono text-neutral-400">M1</div>
      </aside>

      {/* Primary Workspace Engine Container */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-14 w-full border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-md flex items-center justify-between px-6 z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              mynd-org / production
            </div>
            <span className="text-[11px] font-mono text-neutral-600">v0.2.0-alpha</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-neutral-500">Cmd+K</span>
            <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              3 agents online
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left - Agent Canvas */}
          <div className="flex-1 relative">
            <MyndAgentCanvas>
              {/* Node Cards */}
              <div className="absolute top-20 left-16 z-10">
                <div className="rounded-xl border border-white/[0.06] bg-[#09090b]/90 backdrop-blur-sm p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] w-56 cursor-pointer hover:border-indigo-500/30 transition-all duration-200" onClick={() => setIsDrawerOpen(true)}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    <span className="text-xs font-medium text-neutral-200">CRM Sync Agent</span>
                  </div>
                  <div className="space-y-1.5 text-[10px] font-mono text-neutral-500">
                    <div className="flex justify-between"><span>Status</span><span className="text-emerald-400">Running</span></div>
                    <div className="flex justify-between"><span>Uptime</span><span className="text-neutral-300">4h 22m</span></div>
                    <div className="flex justify-between"><span>Events</span><span className="text-neutral-300">1,247</span></div>
                    <div className="flex justify-between"><span>Latency</span><span className="text-neutral-300">42ms p99</span></div>
                  </div>
                </div>
              </div>

              <div className="absolute top-20 right-24 z-10">
                <div className="rounded-xl border border-white/[0.06] bg-[#09090b]/90 backdrop-blur-sm p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] w-56 cursor-pointer hover:border-purple-500/30 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-xs font-medium text-neutral-200">ML Inference Node</span>
                  </div>
                  <div className="space-y-1.5 text-[10px] font-mono text-neutral-500">
                    <div className="flex justify-between"><span>Status</span><span className="text-amber-400">Warm</span></div>
                    <div className="flex justify-between"><span>Model</span><span className="text-neutral-300">gpt-4-turbo</span></div>
                    <div className="flex justify-between"><span>Tokens</span><span className="text-neutral-300">847K</span></div>
                    <div className="flex justify-between"><span>Cost</span><span className="text-neutral-300">$12.40</span></div>
                  </div>
                </div>
              </div>

              {/* SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.15 }}>
                <line x1="25%" y1="35%" x2="65%" y2="35%" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="65%" y1="35%" x2="50%" y2="65%" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="25%" y1="35%" x2="35%" y2="65%" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              <div className="absolute bottom-24 left-16 z-10">
                <div className="rounded-xl border border-white/[0.06] bg-[#09090b]/90 backdrop-blur-sm p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] w-56 cursor-pointer hover:border-emerald-500/30 transition-all duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-medium text-neutral-200">Pipeline Router</span>
                  </div>
                  <div className="space-y-1.5 text-[10px] font-mono text-neutral-500">
                    <div className="flex justify-between"><span>Status</span><span className="text-emerald-400">Active</span></div>
                    <div className="flex justify-between"><span>Routed</span><span className="text-neutral-300">3,891</span></div>
                    <div className="flex justify-between"><span>Errors</span><span className="text-emerald-400">0</span></div>
                    <div className="flex justify-between"><span>Throughput</span><span className="text-neutral-300">142/s</span></div>
                  </div>
                </div>
              </div>

              {/* Embedded Code Playground on Canvas */}
              <div className="absolute bottom-8 right-8 z-10 w-96">
                <MyndCodePlayground />
              </div>
            </MyndAgentCanvas>
          </div>

          {/* Right Panel - Observability */}
          <aside className="w-80 border-l border-white/[0.06] bg-[#09090b] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-white/[0.06]">
              <h2 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">Pipeline Monitor</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <MyndTraceWaterfall steps={runtimeMetrics} />

              {/* Live Log Stream */}
              <div className="rounded-xl border border-white/[0.06] bg-[#030303] p-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">Live Stream</h3>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">10:44:02</span><span className="text-indigo-400">[agent]</span><span className="text-neutral-400">CRM sync complete</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">10:44:05</span><span className="text-purple-400">[infer]</span><span className="text-neutral-400">Token batch flushed</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">10:44:08</span><span className="text-emerald-400">[route]</span><span className="text-neutral-400">Pipeline dispatched</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">10:44:11</span><span className="text-amber-400">[warn]</span><span className="text-neutral-400">Rate limit approaching</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">10:44:14</span><span className="text-indigo-400">[agent]</span><span className="text-neutral-400">New session started</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">10:44:17</span><span className="text-emerald-400">[route]</span><span className="text-neutral-400">Health check passed</span></div>
                </div>
              </div>

              {/* Quick Actions Grid */}
              <div className="rounded-xl border border-white/[0.06] bg-[#09090b] p-3">
                <h3 className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Deploy", key: "⌘D" },
                    { label: "Rollback", key: "⌘R" },
                    { label: "Scale Up", key: "⌘↑" },
                    { label: "Debug", key: "⌘B" },
                  ].map((action) => (
                    <button
                      key={action.label}
                      className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[11px] text-neutral-400 hover:text-neutral-200 hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-150"
                    >
                      {action.label}
                      <span className="text-[9px] font-mono text-neutral-600">{action.key}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
