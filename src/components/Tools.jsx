import React from 'react';
import { toolsData } from '../data/tools';

export default function Tools() {
  return (
    <section className="py-space-2xl border-b border-surface-container-highest bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop text-center">
        <span className="text-label-caps font-label-caps text-on-surface-variant font-bold block mb-6">
          PRODUCTION SOFTWARE & TOOLKIT
        </span>
        
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {toolsData.map((tool, idx) => (
            <span
              key={idx}
              className="px-5 py-2.5 rounded-full bg-surface-container border border-surface-container-highest text-primary font-label-index text-label-index flex items-center gap-2 hover:border-secondary hover:bg-surface-container-high transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>{tool.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
