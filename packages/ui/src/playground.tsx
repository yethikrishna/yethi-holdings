"use client";
import React, { useState } from "react";

export const MyndCodePlayground = () => {
  const [activeTab, setActiveTab] = useState("bash");
  const codeSnippets: Record<string, string> = {
    bash: "curl -X POST https://mynd.labs \\\n -H 'Authorization: Bearer mynd_sec_83x9'\n -d '{\"agent\": \"alpha_core\"}'",
    node: "const mynd = require('@mynd/sdk')('mynd_sec_83x9');\n\nawait mynd.agents.trigger('alpha_core');",
  };

  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/[0.06] bg-black font-mono text-xs text-neutral-300 shadow-lg">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#09090b] px-4 py-2">
        <div className="flex gap-2">
          {["bash", "node"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${activeTab === tab ? "bg-white/[0.06] text-indigo-400" : "text-neutral-500 hover:text-neutral-300"}`}>
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-neutral-600">POST /v1/agents</span>
      </div>
      <pre className="p-4 overflow-x-auto text-neutral-400 leading-relaxed bg-white/[0.01]"><code>{codeSnippets[activeTab]}</code></pre>
    </div>
  );
};
