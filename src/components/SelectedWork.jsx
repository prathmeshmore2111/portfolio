import React, { useState, useMemo } from 'react';
import { projectsData, filterCategories } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function SelectedWork({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="work" className="py-space-3xl md:py-space-5xl border-b border-surface-container-highest bg-surface">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        {/* Header & Category Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-label-caps font-label-caps text-secondary font-bold">
                03 // SELECTED ARCHIVE
              </span>
            </div>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-primary tracking-tight">
              Curated Work.
            </h2>
          </div>

          {/* Interactive Filter Chips */}
          <div className="flex flex-wrap gap-2 mt-6 lg:mt-0" id="filterContainer">
            {filterCategories.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2.5 rounded-full text-label-caps font-label-caps font-bold transition-all duration-200 active:scale-95 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-secondary-bright"></span>}
                  <span>{filter.label} ({filter.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Grid of Real Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projectsGrid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
