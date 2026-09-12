import React from 'react';

export default function MarqueeTicker() {
  const items = [
    "BRANDING & IDENTITY",
    "PACKAGING & POUCH LABELS",
    "BOOK COVER DESIGN",
    "SOCIAL MEDIA CAMPAIGNS",
    "MARKETING COLLATERAL",
    "VECTOR ART DIRECTION",
    "PREPRESS PRECISION",
    "CAN & BOTTLE LABELS",
    "PUBLISHING TYPOGRAPHY",
    "COMMERCIAL DIELINES"
  ];

  return (
    <div className="border-b border-surface-container-highest bg-surface-container py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-marquee-reverse items-center text-label-caps font-label-caps text-on-surface-variant tracking-[0.25em]">
        {/* Repeating sequence for seamless infinite loop from left to right */}
        {[...items, ...items].map((item, index) => (
          <React.Fragment key={index}>
            <span className="px-4 font-semibold">{item}</span>
            <span className="text-secondary font-bold text-xs">●</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
