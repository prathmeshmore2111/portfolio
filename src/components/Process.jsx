import React from 'react';
import { processData } from '../data/process';

export default function Process() {
  return (
    <section id="process" className="py-space-3xl md:py-space-5xl border-b border-surface-container-highest bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="mb-16">
          <span className="text-label-caps font-label-caps text-secondary font-bold block mb-1">
            04 // METHODOLOGY
          </span>
          <h2 className="text-headline-xl-mobile md:text-headline-lg font-headline-lg text-primary tracking-tight">
            From Idea To Final Design
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-xl mt-3">
            A reliable 4-step creative sequence guaranteeing strategic resonance, visual refinement, and painless print production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processData.map((item, idx) => {
            const isFirst = idx === 0;
            const isLast = idx === processData.length - 1;
            return (
              <div
                key={item.step}
                className={`relative pt-6 border-t-2 transition-all duration-300 ${
                  isFirst
                    ? 'border-primary'
                    : isLast
                    ? 'border-surface-container-highest hover:border-secondary'
                    : 'border-surface-container-highest hover:border-primary'
                }`}
              >
                <span
                  className={`text-display-hero-mobile font-display-hero-mobile font-extrabold block -mt-4 mb-2 ${
                    isLast ? 'text-secondary' : 'text-surface-container-highest'
                  }`}
                >
                  {item.step}
                </span>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-3 font-bold">
                  {item.title}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
