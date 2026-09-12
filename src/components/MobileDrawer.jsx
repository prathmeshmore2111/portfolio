import React, { useEffect } from 'react';

export default function MobileDrawer({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', icon: 'home' },
    { label: 'About', href: '#about', icon: 'person' },
    { label: 'Services', href: '#services', icon: 'design_services' },
    { label: 'Work', href: '#work', icon: 'grid_view' },
    { label: 'Process', href: '#process', icon: 'account_tree' },
    { label: 'Contact', href: '#contact', icon: 'mail' },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-surface shadow-2xl border-l border-surface-container-highest transition-transform duration-300 ease-in-out flex flex-col justify-between p-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-surface-container-highest">
            <div className="flex items-center gap-3">
              <img 
                src="/images/logo.png" 
                alt="Prathamesh More Logo" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <div className="text-headline-sm font-headline-sm font-bold text-primary">
                  Prathamesh More
                </div>
                <div className="text-label-caps font-label-caps text-on-surface-variant">
                  Graphic Designer & Art Director
                </div>
              </div>
            </div>
            <button
              aria-label="Close menu"
              className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
              onClick={onClose}
            >
              <span className="material-symbols-outlined" data-icon="close">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-4 text-on-surface-variant hover:text-primary text-body-xl font-body-xl py-3 pl-4 rounded-lg hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined" data-icon={link.icon}>
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-surface-container-highest">
          <a
            className="w-full py-3 rounded-full bg-primary text-on-primary text-center font-label-index text-label-index block mb-4 hover:bg-secondary transition-colors"
            href="#contact"
            onClick={onClose}
          >
            Let's Talk
          </a>
          <div className="flex justify-around text-on-surface-variant text-label-caps font-label-caps pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-body-sm" data-icon="photo_camera">photo_camera</span> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-body-sm" data-icon="work">work</span> LinkedIn
            </a>
            <a href="#contact" onClick={onClose} className="flex items-center gap-1 hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-body-sm" data-icon="send">send</span> Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
