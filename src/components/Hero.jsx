import React from 'react';

export default function Hero({ onSelectProject }) {
  return (
    <section 
      id="home" 
      className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-surface-container-highest relative bg-surface-container-lowest overflow-hidden"
    >
      {/* Background Architectural Drafting Grid & Watermarks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute inset-0 opacity-[0.035] bg-drafting-grid"></div>
        
        {/* Giant Monograph Watermark - Scrolling Left to Right */}
        <div className="absolute inset-x-0 top-1/4 pointer-events-none whitespace-nowrap overflow-hidden select-none">
          <div className="flex w-max animate-marquee-reverse-slow text-[16vw] font-display-hero font-extrabold text-primary opacity-[0.025] leading-none tracking-tighter uppercase select-none">
            <div className="flex items-center gap-12 pr-12">
              <span>CRAFT & FORM</span>
              <span className="opacity-40">·</span>
              <span>CRAFT & FORM</span>
              <span className="opacity-40">·</span>
              <span>CRAFT & FORM</span>
              <span className="opacity-40">·</span>
              <span>CRAFT & FORM</span>
              <span className="opacity-40">·</span>
            </div>
            <div className="flex items-center gap-12 pr-12">
              <span>CRAFT & FORM</span>
              <span className="opacity-40">·</span>
              <span>CRAFT & FORM</span>
              <span className="opacity-40">·</span>
              <span>CRAFT & FORM</span>
              <span className="opacity-40">·</span>
              <span>CRAFT & FORM</span>
              <span className="opacity-40">·</span>
            </div>
          </div>
        </div>

        {/* Precision Geometric Construction Compass Circles */}
        <svg 
          className="absolute right-0 top-12 w-[650px] h-[650px] text-primary opacity-[0.05] hidden lg:block" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 700 700"
        >
          <circle cx="350" cy="350" r="280" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="350" cy="350" r="180" strokeWidth="1" />
          <path d="M 70 350 L 630 350 M 350 70 L 350 630" strokeWidth="1" />
          <rect x="230" y="230" width="240" height="240" strokeWidth="1" />
          <path d="M 150 480 C 220 220, 480 220, 550 480" strokeWidth="1.5" />
          <circle cx="220" cy="220" r="4" fill="currentColor" />
          <circle cx="480" cy="220" r="4" fill="currentColor" />
          <line x1="150" y1="480" x2="220" y2="220" strokeWidth="0.75" strokeDasharray="2 2" />
          <line x1="550" y1="480" x2="480" y2="220" strokeWidth="0.75" strokeDasharray="2 2" />
        </svg>

        {/* CMYK Prepress Color Calibration Blocks */}
        <div className="absolute bottom-6 right-8 hidden md:flex items-center gap-2 opacity-40">
          <span className="w-3 h-3 rounded-full bg-[#00ffff] border border-primary/20" title="Cyan"></span>
          <span className="w-3 h-3 rounded-full bg-[#ff00ff] border border-primary/20" title="Magenta"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffff00] border border-primary/20" title="Yellow"></span>
          <span className="w-3 h-3 rounded-full bg-[#000000] border border-primary/20" title="Key (Black)"></span>
          <span className="font-label-caps text-[10px] text-on-surface-variant font-bold ml-1 tracking-wider">
            CMYK PREPRESS CALIBRATION
          </span>
        </div>

        {/* Corner Crops */}
        <div className="absolute top-28 right-8 w-6 h-6 border-t-2 border-r-2 border-primary/20 hidden md:block"></div>
        <div className="absolute bottom-12 left-8 w-6 h-6 border-b-2 border-l-2 border-primary/20 hidden md:block"></div>
      </div>

      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop relative z-10">
        {/* Precision Grid Coordinates & Metadata Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-surface-container pb-4 mb-8 text-label-caps font-label-caps text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary-bright animate-pulse"></span>
            <span className="tracking-widest font-semibold text-primary">
              GRAPHIC DESIGNER · VISUAL COMMUNICATION
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <span>INDEX // 2026.ED</span>
            <span>MUMBAI / GLOBAL FREELANCE</span>
            <span>SYSTEMS & PACKAGING</span>
          </div>
        </div>

        {/* Monumental Hero Typographic Lockup & Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Monumental Headline & Narrative */}
          <div className="lg:col-span-7">
            <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero text-primary tracking-tighter leading-none mb-6">
              Turning Ideas Into Visual Experiences.
            </h1>
            
            <p className="text-body-xl font-body-xl text-on-surface-variant max-w-xl mb-8 leading-relaxed">
              Graphic designer focused on branding, social media, marketing creatives, packaging, book covers, and visual communication. Every system is built to captivate, connect, and convert.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="px-8 py-4 rounded-full bg-primary text-on-primary text-label-index font-label-index hover:bg-secondary transition-all duration-200 active:scale-95 flex items-center gap-3 group shadow-sm hover:shadow-md"
                href="#work"
              >
                <span>View My Work</span>
                <span className="material-symbols-outlined group-hover:translate-x-1.5 transition-transform" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </a>

              <a
                className="px-8 py-4 rounded-full border border-primary text-primary text-label-index font-label-index hover:bg-surface-container transition-all duration-200 active:scale-95"
                href="#contact"
              >
                Let's Talk
              </a>
            </div>

            {/* Honest Specialty Metrics / Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 mt-10 border-t border-surface-container">
              <div>
                <span className="text-headline-md font-headline-md text-primary font-bold block">100%</span>
                <span className="text-label-caps font-label-caps text-on-surface-variant font-medium">GRAPHIC SPECIFIC</span>
              </div>
              <div>
                <span className="text-headline-md font-headline-md text-primary font-bold block">04</span>
                <span className="text-label-caps font-label-caps text-on-surface-variant font-medium">CORE DISCIPLINES</span>
              </div>
              <div>
                <span className="text-headline-md font-headline-md text-secondary font-bold block">READY</span>
                <span className="text-label-caps font-label-caps text-on-surface-variant font-medium">PREPRESS & DIGITAL</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Editorial Hero Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Showcase Card */}
              <div 
                className="relative rounded-2xl overflow-hidden bg-surface-container border border-surface-container-highest shadow-xl group cursor-pointer"
                onClick={() => onSelectProject && onSelectProject('bjorns')}
              >
                <div className="aspect-[4/4] overflow-hidden bg-surface-container-low">
                  <img 
                    src="/images/bjorns.jpg" 
                    alt="Björns Superfood Gummies Packaging"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating Meta Tag */}
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-label-caps font-label-caps text-primary border border-surface-container-highest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-bright"></span>
                  <span>FEATURED CASE STUDY</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="p-5 bg-surface-container-lowest border-t border-surface-container-highest flex items-center justify-between">
                  <div>
                    <span className="text-label-caps font-label-caps text-secondary font-bold block">
                      RETAIL DOYPACK POUCH
                    </span>
                    <h3 className="text-headline-sm font-headline-sm text-primary font-bold">
                      Björns Superfood Gummies
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-body-md" data-icon="north_east">north_east</span>
                  </div>
                </div>
              </div>

              {/* Inset Secondary Floating Pill Tag */}
              <div className="mt-4 p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container-highest flex items-center justify-between text-label-caps font-label-caps text-on-surface-variant">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  CLIENT PORTFOLIO ARCHIVE
                </span>
                <span className="text-primary font-bold">20+ CURATED WORKS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
