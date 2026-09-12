import React from 'react';
import { servicesData } from '../data/services';

export default function Services() {
  return (
    <section id="services" className="py-space-3xl md:py-space-4xl border-b border-surface-container-highest bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-label-caps font-label-caps text-secondary font-bold block mb-1">
              02 // CAPABILITIES
            </span>
            <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
              What I Design
            </h2>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant max-w-md mt-4 md:mt-0">
            End-to-end visual solutions crafted with mathematical Swiss precision, tailored for commercial impact and brand distinction.
          </p>
        </div>

        {/* 6-Cell Swiss Exhibition Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-surface-container-highest">
          {servicesData.map((service) => (
            <div
              key={service.number}
              className="p-8 border-b border-r border-surface-container-highest hover:bg-surface-container-low transition-colors duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-label-index font-label-index text-secondary font-bold">
                    {service.number}
                  </span>
                  <span
                    className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:scale-110 transition-all duration-200"
                    data-icon={service.icon}
                  >
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-headline-md font-headline-md text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-body-md font-body-md text-on-surface-variant mb-6">
                  {service.description}
                </p>
              </div>

              <div className="text-label-caps font-label-caps text-on-surface-variant flex flex-wrap gap-2 pt-2">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-surface-container rounded-full text-primary font-medium group-hover:bg-surface-container-highest transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
