import React, { useState } from 'react';
import { faqsData } from '../data/faqs';

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-space-3xl md:py-space-5xl border-b border-surface-container-highest bg-surface">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
          <span className="text-label-caps font-label-caps text-secondary font-bold block mb-1">
            05 // CLARIFICATIONS
          </span>
          <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4" id="faqAccordion">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="faq-item border border-surface-container-highest rounded-xl bg-surface-container-lowest overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="faq-question w-full p-6 text-left flex items-center justify-between font-headline-sm text-headline-sm text-primary hover:bg-surface-container-low transition-colors"
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`material-symbols-outlined faq-icon transition-transform duration-300 text-on-surface-variant flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-secondary' : 'rotate-0'
                    }`}
                    data-icon="expand_more"
                  >
                    expand_more
                  </span>
                </button>
                
                <div
                  className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out px-6 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-body-md font-body-md text-on-surface-variant pb-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
