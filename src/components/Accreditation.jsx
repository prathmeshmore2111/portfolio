import React from 'react';

export default function Accreditation() {
  return (
    <section className="py-space-3xl border-b border-surface-container-highest bg-surface">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="rounded-2xl bg-surface-container-low p-8 md:p-12 border border-surface-container-highest">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-label-caps font-label-caps text-secondary font-bold block mb-2">
                COMPETITIVE ACCREDITATION
              </span>
              <h3 className="text-headline-lg font-headline-lg text-primary mb-4">
                Designing For Real Briefs Under Intense Constraints
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant mb-6 leading-relaxed">
                A substantial portion of my portfolio emerges from competitive global briefs and 99designs contests across Branding, Packaging, Book Covers, and Marketing. Competing against hundreds of international designers has honed my ability to instantly interpret complex client criteria and produce standout, high-converting visual concepts that win.
              </p>
              
              <div className="flex flex-wrap gap-3 text-label-caps font-label-caps text-primary font-bold">
                <span className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2.5 rounded-full border border-surface-container-highest">
                  <span className="material-symbols-outlined text-secondary text-body-sm" data-icon="verified">
                    verified
                  </span>
                  Strict Shelf Deadlines
                </span>
                <span className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2.5 rounded-full border border-surface-container-highest">
                  <span className="material-symbols-outlined text-secondary text-body-sm" data-icon="verified">
                    verified
                  </span>
                  Commercial Industry Standards
                </span>
                <span className="flex items-center gap-2 bg-surface-container-lowest px-4 py-2.5 rounded-full border border-surface-container-highest">
                  <span className="material-symbols-outlined text-secondary text-body-sm" data-icon="verified">
                    verified
                  </span>
                  Diverse Global Client Bases
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="p-6 rounded-xl bg-surface-container-lowest border border-surface-container-highest w-full text-center">
                <span className="text-headline-md font-headline-md text-primary font-bold block mb-1">
                  Graphic Precision
                </span>
                <span className="text-label-caps font-label-caps text-on-surface-variant block mb-4">
                  PRINT · PACKAGING · IDENTITY
                </span>
                <a
                  className="w-full py-3 rounded-full bg-primary text-on-primary text-label-index font-label-index block hover:bg-secondary transition-colors"
                  href="#contact"
                >
                  Start Your Brief
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
