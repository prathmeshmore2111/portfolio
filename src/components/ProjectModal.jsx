import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-primary/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-surface-container-lowest rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar border border-surface-container-highest shadow-2xl p-6 md:p-8 z-10">
        {/* Close Button */}
        <button
          aria-label="Close project modal"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors z-20"
          onClick={onClose}
        >
          <span className="material-symbols-outlined" data-icon="close">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image */}
          <div className="md:col-span-6">
            <div className="rounded-xl overflow-hidden border border-surface-container-highest bg-surface-container-low max-h-[500px] flex items-center justify-center p-4">
              <img
                src={project.modalImage || project.image}
                alt={project.title}
                className="w-full h-auto max-h-[460px] object-contain rounded"
              />
            </div>
          </div>

          {/* Right Column: Narrative & Details */}
          <div className="md:col-span-6 flex flex-col justify-between h-full">
            <div>
              {/* Award Callout for 99designs Winner */}
              {project.isWinner && (
                <div className="mb-5 p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/40 flex items-center gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-amber-300/50">
                    <span className="material-symbols-outlined text-xl" data-icon="emoji_events">
                      emoji_events
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-label-caps font-label-caps text-amber-900 font-extrabold tracking-wider">
                        99DESIGNS CONTEST WINNER · 1ST PLACE
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-900 text-[9px] font-bold uppercase tracking-widest border border-amber-500/30">
                        OFFICIAL WIN
                      </span>
                    </div>
                    <p className="text-body-sm text-on-surface-variant text-xs mt-1 leading-snug">
                      {project.awardNote || "Selected as the 1st place winning entry in an international blind contest on 99designs."}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full ${project.isWinner ? 'bg-amber-500' : 'bg-secondary'}`}></span>
                <span className={`text-label-caps font-label-caps font-bold ${project.isWinner ? 'text-amber-800' : 'text-secondary'}`}>
                  {project.categoryLabel}
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-primary font-bold mb-1 flex items-center gap-2">
                <span>{project.title}</span>
                {project.isWinner && (
                  <span className="text-amber-500" title="99designs Contest Winner">
                    <span className="material-symbols-outlined text-2xl" data-icon="verified">verified</span>
                  </span>
                )}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 font-medium">
                {project.subtitle || project.tag}
              </p>

              {/* Overview */}
              <div className="mb-6">
                <h4 className="text-label-caps font-label-caps text-primary font-bold mb-2">
                  PROJECT OVERVIEW
                </h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  {project.overview || project.shortDesc}
                </p>
              </div>

              {/* Key Deliverables */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-label-caps font-label-caps text-primary font-bold mb-2">
                    KEY DELIVERABLES
                  </h4>
                  <ul className="space-y-1.5 text-body-sm font-body-sm text-on-surface-variant">
                    {project.deliverables.map((d, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Footer Details */}
            <div className="pt-6 border-t border-surface-container-highest flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
              <div>
                <span className="text-label-caps font-label-caps text-on-surface-variant block">
                  TOOLS APPLIED
                </span>
                <span className="text-body-sm font-bold text-primary">
                  {project.software ? project.software.join(' · ') : 'Adobe Creative Suite'}
                </span>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-primary text-on-primary text-label-index font-label-index hover:bg-secondary transition-colors text-center"
              >
                Commission Similar Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
