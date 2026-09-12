import React from 'react';

export default function ProjectCard({ project, onOpenModal }) {
  const isWinner = Boolean(project.isWinner);

  return (
    <article
      className={`project-item group rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between relative ${
        isWinner
          ? 'bg-surface-container-lowest border-2 border-amber-500/60 shadow-[0_4px_24px_rgba(217,119,6,0.12)] hover:shadow-[0_8px_32px_rgba(217,119,6,0.22)] hover:border-amber-500 ring-1 ring-amber-400/30'
          : 'bg-surface-container-lowest border border-surface-container-highest hover:border-primary hover:shadow-lg'
      }`}
      data-category={project.category}
    >
      {/* Subtle Warm Gradient Overlay for Winner Card */}
      {isWinner && (
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/[0.04] via-transparent to-amber-500/[0.02] pointer-events-none z-0" />
      )}

      <div
        className="relative aspect-square overflow-hidden bg-surface-container-low flex items-center justify-center p-4 cursor-pointer z-10"
        onClick={() => onOpenModal(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
        />
        
        {/* Category Pill Tag - Hidden on laptop/desktop by default, revealed smoothly on card hover */}
        <div className="absolute top-4 left-4 bg-surface/95 backdrop-blur-md px-3 py-1 rounded-full text-label-caps font-label-caps text-primary border border-surface-container-highest flex items-center gap-1.5 shadow-sm opacity-100 md:opacity-0 md:-translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto z-20">
          <span className={`w-1.5 h-1.5 rounded-full ${isWinner ? 'bg-amber-500' : 'bg-secondary'}`}></span>
          <span>{project.categoryLabel}</span>
        </div>

        {/* 99 Winning Project Floating Badge */}
        {isWinner && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white px-3 py-1 rounded-full text-label-caps font-label-caps font-extrabold flex items-center gap-1.5 shadow-lg ring-2 ring-white/70 backdrop-blur-md z-20">
            <span className="material-symbols-outlined text-sm text-yellow-200" data-icon="emoji_events">
              emoji_events
            </span>
            <span className="tracking-wider">99 WINNING PROJECT</span>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow relative z-10">
        <div>
          {/* 99 Contest Winner Sub-Badge */}
          {isWinner && (
            <div className="flex items-center gap-1.5 mb-2.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-900 w-fit">
              <span className="material-symbols-outlined text-sm text-amber-600" data-icon="military_tech">
                military_tech
              </span>
              <span className="text-[10px] font-label-caps font-bold tracking-wider">
                99DESIGNS 1ST PLACE CONTEST WINNER
              </span>
            </div>
          )}

          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-label-caps font-label-caps text-secondary font-bold block">
                {project.tag}
              </span>
              <h3 className="text-headline-sm font-headline-sm text-primary mt-1 font-bold flex items-center gap-2">
                <span>{project.title}</span>
                {isWinner && (
                  <span className="inline-flex items-center text-amber-500" title="99designs Contest Winner">
                    <span className="material-symbols-outlined text-lg" data-icon="verified">verified</span>
                  </span>
                )}
              </h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                {project.shortDesc}
              </p>
            </div>

            <button
              aria-label={`View ${project.title} project details`}
              className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center transition-colors active:scale-95 ${
                isWinner
                  ? 'border border-amber-500/40 text-amber-800 bg-amber-500/10 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500'
                  : 'border border-surface-container-highest text-primary group-hover:bg-primary group-hover:text-on-primary'
              }`}
              onClick={() => onOpenModal(project)}
            >
              <span className="material-symbols-outlined text-body-md" data-icon="north_east">
                north_east
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
