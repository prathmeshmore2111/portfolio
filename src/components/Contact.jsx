import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-space-3xl md:py-space-5xl bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Narrative */}
          <div className="lg:col-span-5">
            <span className="text-label-caps font-label-caps text-secondary font-bold block mb-2">
              06 // INITIATE COLLABORATION
            </span>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-primary tracking-tight mb-6">
              Have a Design Project?
            </h2>
            <p className="text-body-xl font-body-xl text-on-surface-variant mb-8 leading-relaxed">
              Let's turn your idea into a strong visual. Available for select freelance branding, packaging, and book cover design commissions worldwide.
            </p>

            <div className="space-y-4 text-body-sm font-body-sm text-on-surface">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="mail">
                  mail
                </span>
                <a
                  href="mailto:moreprathamesh2111@gmail.com"
                  className="font-bold text-primary hover:text-secondary transition-colors"
                >
                  moreprathamesh2111@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="schedule">
                  schedule
                </span>
                <span>Response Time: Typically within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="location_on">
                  location_on
                </span>
                <span>Operating Globally (Remote Freelance · Mumbai Base)</span>
              </div>
            </div>
          </div>

          {/* Architectural Minimalist Form */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-10 rounded-2xl border border-surface-container-highest shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone No. Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-label-caps font-label-caps text-on-surface-variant font-bold block mb-2">
                    NAME *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-primary focus:outline-none focus:ring-0 px-0 py-2.5 text-body-md font-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-label-caps font-label-caps text-on-surface-variant font-bold block mb-2">
                    PHONE NO.
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter Your Phone No."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-primary focus:outline-none focus:ring-0 px-0 py-2.5 text-body-md font-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors"
                  />
                </div>
              </div>

              {/* Email & Subject Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="text-label-caps font-label-caps text-on-surface-variant font-bold block mb-2">
                    EMAIL *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-primary focus:outline-none focus:ring-0 px-0 py-2.5 text-body-md font-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-label-caps font-label-caps text-on-surface-variant font-bold block mb-2">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Write Your Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-primary focus:outline-none focus:ring-0 px-0 py-2.5 text-body-md font-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label htmlFor="message" className="text-label-caps font-label-caps text-on-surface-variant font-bold block mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  placeholder="Write Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-primary focus:outline-none focus:ring-0 px-0 py-2 text-body-md font-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors resize-none"
                ></textarea>
              </div>

              {/* Submit Button & Status */}
              <div>
                {status !== 'success' && (
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-on-primary text-label-index font-label-index hover:bg-secondary transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-75"
                  >
                    <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                    <span className="material-symbols-outlined" data-icon="send">
                      send
                    </span>
                  </button>
                )}
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-lg bg-surface-container text-primary text-body-sm font-body-sm flex items-center gap-3 border border-secondary">
                  <span className="material-symbols-outlined text-secondary" data-icon="check_circle">
                    check_circle
                  </span>
                  <span>
                    Thank you! Your message has been received. Prathamesh will get back to you promptly.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
