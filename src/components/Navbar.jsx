import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenDrawer }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'work', 'process', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface/90 backdrop-blur-md border-b border-surface-container-highest shadow-sm' 
        : 'bg-surface/80 backdrop-blur-sm border-b border-surface-container-highest'
    }`}>
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          className="text-headline-sm font-headline-sm font-bold tracking-tight text-primary flex items-center gap-3 group" 
          href="#home"
        >
          <img 
            src="/images/logo.png" 
            alt="Prathamesh More Logo" 
            className="h-9 sm:h-10 w-auto object-contain transition-transform rounded-full"
          />
          <span className="hidden sm:inline font-bold">Prathamesh More</span>
          <span className="sm:hidden font-bold">Prathamesh</span>
        </a>

        {/* Desktop Navigation Cluster */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`py-1 text-body-sm font-body-md transition-all duration-150 border-b-2 ${
                  isActive
                    ? 'text-primary font-bold border-secondary'
                    : 'text-on-surface-variant hover:text-primary border-transparent'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Trailing Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-label-index font-label-index hover:bg-secondary transition-colors duration-200 active:scale-95 flex items-center gap-2"
            href="#contact"
          >
            <span>Let's Talk</span>
            <span className="w-1.5 h-1.5 rounded-full bg-secondary-bright animate-ping"></span>
          </a>

          <button
            aria-label="Toggle Menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-surface-container-highest text-primary active:scale-95 transition-transform hover:bg-surface-container"
            onClick={onOpenDrawer}
          >
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
