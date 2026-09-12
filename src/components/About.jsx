import React from 'react';

export default function About() {
  const coreFocus = [
    {
      icon: "water_drop",
      title: "Branding & Visual Identity",
      subtitle: "Logos · Typography · Design Systems"
    },
    {
      icon: "inventory_2",
      title: "Packaging & Product Labels",
      subtitle: "Pouches · Cans · Tubs & Dielines"
    },
    {
      icon: "auto_stories",
      title: "Book Covers & Publishing",
      subtitle: "Fiction · Business · Dust Jackets"
    },
    {
      icon: "campaign",
      title: "High-Converting Creatives",
      subtitle: "Social Sets · Ads · Print Precision"
    }
  ];

  return (
    <section id="about" className="py-space-3xl md:py-space-5xl border-b border-surface-container-highest bg-surface">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Marker */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="text-label-caps font-label-caps text-secondary font-bold">
            01 // ABOUT THE DESIGNER
          </span>
        </div>

        {/* Top Story & Visual Architecture Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Portrait & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0">
            <div className="relative rounded-2xl overflow-hidden bg-surface-container border border-surface-container-highest shadow-lg 
            group w-full h-[540px] sm:h-[620px] md:h-[700px] lg:min-h-[660px] lg:h-full lg:flex-1">
              <img
                src="/images/about-portrait.jpg"
                alt="Prathamesh More — Graphic Designer & Visual Communication Specialist"
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-md p-3.5 rounded-xl border border-surface-container-highest flex items-center justify-between shadow-sm z-10">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <div>
                    <span className="text-body-sm font-bold text-primary block leading-tight">
                      Prathamesh More
                    </span>
                    <span className="text-label-caps font-label-caps text-on-surface-variant block">
                      Graphic Designer & Art Director
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-label-caps uppercase tracking-wider text-on-surface-variant font-bold bg-surface-container px-2.5 py-1 rounded-full border border-surface-container-highest">
                  Mumbai · Global
                </span>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="mt-4 p-4 rounded-xl bg-surface-container-lowest border border-surface-container-highest flex items-center justify-between text-label-caps font-label-caps text-on-surface-variant flex-shrink-0 w-full">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                STATUS: ACCEPTING COMMISSIONS
              </span>
              <span className="text-secondary font-bold">INDEX // 2026</span>
            </div>
          </div>

          {/* Right Column: Narrative, Creed & CTAs with natural, cohesive spacing */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <div className="border-t-2 border-primary pt-4 mb-5">
              <h2 className="text-headline-xl-mobile md:text-headline-lg font-headline-lg text-primary tracking-tight mb-4">
                More Than Just Making Things Look Good.
              </h2>
              <p className="text-headline-md font-headline-md text-primary font-normal leading-snug mb-5">
                I bridge strategic brand thinking with arresting visual execution. Every contour, typeface choice, and color weight is calculated to connect, captivate, and convert.
              </p>
            </div>

            <div className="space-y-4 text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
              <p>
                I am Prathamesh More, a dedicated graphic designer and art director operating globally from Mumbai. Working directly with brand founders, independent authors, consumer startups, and international contest platforms, I specialize in engineering intentional visual communication systems that cut through crowded markets.
              </p>
              <p>
                Rather than relying on templated aesthetics, every project undergoes rigorous conceptual deconstruction and mathematical grid balance. From custom hand-crafted illustrations and shelf-commanding pouch architectures to multi-layered editorial book covers, my work is built for distinction and commercial success.
              </p>
            </div>

            {/* Design Creed Box */}
            <div className="p-6 rounded-xl bg-surface-container-low border border-surface-container-highest mb-6">
              <span className="text-label-caps font-label-caps text-secondary font-bold block mb-2">
                DESIGN CREED & PHILOSOPHY
              </span>
              <p className="italic text-primary text-body-xl font-body-xl leading-snug">
                "Great graphic design doesn't simply decorate an idea—it gives that idea structural clarity, emotional resonance, and lasting authority."
              </p>
            </div>

            {/* CTAs directly following the creed box */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="px-8 py-3.5 rounded-full bg-primary text-on-primary text-label-index font-label-index hover:bg-secondary transition-colors active:scale-95 flex items-center gap-2"
                href="#contact"
              >
                <span>Work With Prathamesh</span>
                <span className="material-symbols-outlined text-body-sm" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </a>
              <a
                className="px-8 py-3.5 rounded-full border border-primary text-primary text-label-index font-label-index hover:bg-surface-container transition-colors active:scale-95"
                href="#work"
              >
                Explore Selected Archive
              </a>
            </div>
          </div>
        </div>

        {/* Specialized Core Focus Grid — Full Width below image and narrative */}
        <div className="mt-12 pt-8 border-t border-surface-container-highest">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <span className="text-label-caps font-label-caps text-on-surface-variant font-bold block">
              SPECIALIZED CORE FOCUS
            </span>
            <span className="text-label-caps font-label-caps text-secondary font-bold">
              04 SPECIALIZED DISCIPLINES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreFocus.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-container-lowest border border-surface-container-highest flex items-start gap-4 hover:border-primary hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-on-primary text-headline-sm transition-colors" data-icon={item.icon}>
                    {item.icon}
                  </span>
                </div>
                <div>
                  <span className="text-body-sm font-bold text-primary block mb-0.5">
                    {item.title}
                  </span>
                  <span className="text-label-caps font-label-caps text-on-surface-variant">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
