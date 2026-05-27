"use client";
import React from 'react';
import { MyndCommandPalette } from "../../../../packages/ui/src/navigation";
import { MyndAgentCanvas } from "../../../../packages/ui/src/canvas";
import { MyndTraceWaterfall, type TraceStep } from "../../../../packages/ui/src/telemetry";

const runtimeMetrics: TraceStep[] = [
  { id: "1", name: "Agent Core Boot", duration: "110ms", percentage: 100 },
  { id: "2", name: "CRM Node Mapping", duration: "72ms", percentage: 68 },
  { id: "3", name: "Network Security Handshake", duration: "14ms", percentage: 12 },
  { id: "4", name: "Data Pipeline Ingest", duration: "240ms", percentage: 88 },
  { id: "5", name: "ML Inference Call", duration: "1.2s", percentage: 45 },
];

const navItems = [
  { icon: "⬡", label: "Workspace", active: true },
  { icon: "◈", label: "Agents" },
  { icon: "▦", label: "Canvas" },
  { icon: "◉", label: "Pipelines" },
  { icon: "◎", label: "Monitor" },
];

export default function MyndDashboardRoot() {
  return (
    <div className="flex h-screen w-screen bg-[#030303] text-white overflow-hidden font-sans antialiased">
      {/* Huly Layout Style Navigation Dock */}
      <aside className="w-16 h-full border-r border-white/[0.06] bg-[#09090b] flex flex-col items-center py-5 justify-between z-20">
        <div className="flex flex-col gap-5 w-full items-center">
          {/* Logo */}
          <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 font-bold text-xs">
            M
          </div>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex h-10 w-10 items-center justify-center rounded-lg text-lg transition-all duration-150 ${
                item.active
                  ? "bg-white/[0.06] text-white"
                  : "text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.03]"
              }`}
              title={item.label}
            >
              {item.icon}
            </button>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.03] transition-all duration-150 text-sm">
            ⚙
          </button>
          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 ring-2 ring-white/[0.06]" />
        </div>
      </aside>

      {/* Dub.co Style Multi-Tenant Top Bar */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-12 items-center justify-between border-b border-white/[0.06] bg-[#09090b] px-4 z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              mynd-org / production
            </div>
            <span className="text-[11px] font-mono text-neutral-600">v0.1.0-alpha</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-neutral-500">
              Cmd+K
            </span>
            <span className="text-[11px] font-mono text-neutral-500">3 agents online</span>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex flex-1 overflow-hidden">
          {/* Left Panel - Agent Canvas (Typebot-style) */}
          <div className="flex-1 relative">
            <MyndAgentCanvas>
              {/* Floating Node Cards */}
              <div className="absolute top-20 left-16 z-10">
                <div className="rounded-xl border border-white/[0.06] bg-[#09090b]/90 backdrop-blur-sm p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] w-56">
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
                <div className="rounded-xl border border-white/[0.06] bg-[#09090b]/90 backdrop-blur-sm p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] w-56">
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

              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.15 }}>
                <line x1="25%" y1="35%" x2="65%" y2="35%" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="65%" y1="35%" x2="50%" y2="65%" stroke="#a855f7" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="25%" y1="35%" x2="35%" y2="65%" stroke="#6366f1" strokeWidth="1" strokeDasharray="4 4" />
              </svg>

              <div className="absolute bottom-24 left-16 z-10">
                <div className="rounded-xl border border-white/[0.06] bg-[#09090b]/90 backdrop-blur-sm p-4 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)] w-56">
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
            </MyndAgentCanvas>
          </div>

          {/* Right Panel - Trigger.dev Style Observability */}
          <aside className="w-80 border-l border-white/[0.06] bg-[#09090b] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-white/[0.06]">
              <h2 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">Pipeline Monitor</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Trace Waterfall */}
              <MyndTraceWaterfall steps={runtimeMetrics} />

              {/* Live Log Stream */}
              <div className="rounded-xl border border-white/[0.06] bg-[#030303] p-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase">Live Stream</h3>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">09:04:12</span><span className="text-indigo-400">[agent]</span><span className="text-neutral-400">CRM sync complete</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">09:04:14</span><span className="text-purple-400">[infer]</span><span className="text-neutral-400">Token batch flushed</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">09:04:17</span><span className="text-emerald-400">[route]</span><span className="text-neutral-400">Pipeline dispatched</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">09:04:19</span><span className="text-amber-400">[warn]</span><span className="text-neutral-400">Rate limit approaching</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">09:04:22</span><span className="text-indigo-400">[agent]</span><span className="text-neutral-400">New session started</span></div>
                  <div className="flex gap-2"><span className="text-neutral-600 shrink-0">09:04:25</span><span className="text-emerald-400">[route]</span><span className="text-neutral-400">Health check passed</span></div>
                </div>
              </div>

              {/* Medusa-style Settings Grid */}
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
        </main>
      </div>

      {/* Command Palette Overlay */}
      <MyndCommandPalette />
    </div>
  );
}
