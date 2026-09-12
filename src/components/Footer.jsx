import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-fixed border-t border-surface-container-highest/20">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-surface-container-highest/10">
          {/* Brand Identity */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-3">
              <img 
                src="/images/logo.png" 
                alt="Prathamesh More Logo" 
                className="h-10 w-auto object-contain bg-white/95 rounded-lg p-1 shadow-sm"
              />
              <span className="text-headline-lg font-headline-lg font-extrabold tracking-tighter text-on-primary">
                Prathamesh More
              </span>
            </div>
            <p className="text-on-primary-container text-body-sm font-body-md max-w-sm mb-6 leading-relaxed">
              Graphic Designer & Art Director specializing in Packaging Design, Book Covers, Branding Systems, and Visual Communication.
            </p>
            <div className="flex items-center gap-4 text-label-caps font-label-caps text-on-primary-container">
              <span className="hover:text-secondary cursor-pointer transition-colors">99designs</span>
              <span>/</span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
                Instagram
              </a>
              <span>/</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links Cluster */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-body-sm font-body-md">
            <div>
              <span className="text-label-caps font-label-caps text-on-primary block mb-3 font-bold">
                NAVIGATION
              </span>
              <ul className="space-y-2">
                <li>
                  <a className="text-on-primary-container hover:text-on-primary transition-colors duration-150" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-on-primary-container hover:text-on-primary transition-colors duration-150" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-on-primary-container hover:text-on-primary transition-colors duration-150" href="#work">
                    Selected Work
                  </a>
                </li>
                <li>
                  <a className="text-on-primary-container hover:text-on-primary transition-colors duration-150" href="#services">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-label-caps font-label-caps text-on-primary block mb-3 font-bold">
                DISCIPLINES
              </span>
              <ul className="space-y-2 text-on-primary-container">
                <li>Packaging & Labels</li>
                <li>Book Covers</li>
                <li>Brand Identity</li>
                <li>Marketing Design</li>
              </ul>
            </div>

            <div>
              <span className="text-label-caps font-label-caps text-on-primary block mb-3 font-bold">
                CONNECT
              </span>
              <ul className="space-y-2">
                <li>
                  <a className="text-secondary hover:underline underline-offset-4" href="#contact">
                    Get in Touch
                  </a>
                </li>
                <li>
                  <a className="text-on-primary-container hover:text-on-primary transition-colors duration-150" href="#process">
                    Creative Process
                  </a>
                </li>
                <li className="text-on-primary-container">
                  99designs Verified
                </li>
                <li className="text-on-primary-container">
                  Global Availability
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-on-primary-container text-body-sm font-body-md gap-4">
          <p>© {new Date().getFullYear()} Prathamesh More. All rights reserved. Crafted with architectural Swiss precision.</p>
          <p className="text-label-caps font-label-caps text-on-primary-container font-semibold">
            MUMBAI · GLOBAL FREELANCE
          </p>
        </div>
      </div>
    </footer>
  );
}
