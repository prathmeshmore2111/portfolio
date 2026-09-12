import React, { useState } from 'react';
import { sendContactEmail, isEmailServiceConfigured } from '../services/emailService';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      await sendContactEmail(formData);
      setSubmittedEmail(formData.email);
      setStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('[ContactForm] Error submitting inquiry:', err);
      setErrorMessage(
        err?.message || 'Something went wrong while sending your message. Please try again or reach out directly.'
      );
      setStatus('error');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-space-3xl md:py-space-5xl bg-surface-container-lowest">
      <div className="max-w-[1600px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
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
                <span className="material-symbols-outlined text-secondary" data-icon="mark_email_read">
                  mark_email_read
                </span>
                <span>Instant confirmation auto-sent upon submission</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" data-icon="location_on">
                  location_on
                </span>
                <span>Operating Globally (Remote Freelance · Mumbai Base)</span>
              </div>
            </div>
          </div>

          {/* Architectural Form Box */}
          <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-10 rounded-2xl border border-surface-container-highest shadow-sm relative">
            {status === 'success' ? (
              /* Success Confirmation Card */
              <div className="py-6 text-center sm:text-left space-y-6 animate-fadeIn">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 border border-secondary/30 text-secondary">
                  <span className="material-symbols-outlined text-3xl" data-icon="mark_email_read">
                    mark_email_read
                  </span>
                </div>

                <div>
                  <span className="text-label-caps font-label-caps text-secondary font-bold block mb-1">
                    INQUIRY DISPATCHED SUCCESSFULLY
                  </span>
                  <h3 className="text-headline-md font-headline-md text-primary font-bold mb-3">
                    Thank you for connecting!
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-4">
                    Your design brief has been sent to Prathamesh. We have also queued an automatic confirmation email to <strong className="text-primary font-semibold">{submittedEmail || 'your email'}</strong>.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-surface-container-lowest border border-surface-container-highest text-body-sm font-body-sm space-y-2.5">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span>What happens next:</span>
                  </div>
                  <ul className="space-y-1.5 text-on-surface-variant pl-4 list-disc">
                    <li>Prathamesh will personally review your project specifications and requirements.</li>
                    <li>You will receive a tailored response and initial scope estimate within 24 hours.</li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-8 py-3.5 rounded-full bg-primary text-on-primary text-label-index font-label-index hover:bg-secondary transition-colors active:scale-95 flex items-center gap-2"
                  >
                    <span>Send Another Inquiry</span>
                    <span className="material-symbols-outlined text-body-sm" data-icon="add_circle">
                      add_circle
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-body-sm font-body-sm flex items-start gap-3">
                    <span className="material-symbols-outlined text-red-600 flex-shrink-0" data-icon="error">
                      error
                    </span>
                    <div className="flex-1">
                      <strong className="block font-semibold mb-0.5">Transmission Notice</strong>
                      <p className="text-xs text-red-700 leading-relaxed mb-2">{errorMessage}</p>
                      <a
                        href={`mailto:moreprathamesh2111@gmail.com?subject=Project Inquiry - ${formData.name || 'Client'}&body=${encodeURIComponent(formData.message || '')}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-900 underline hover:no-underline"
                      >
                        Click here to email directly via your mail client
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_outward">arrow_outward</span>
                      </a>
                    </div>
                  </div>
                )}

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
                      placeholder="e.g. Packaging, Book Cover, Branding"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-primary focus:outline-none focus:ring-0 px-0 py-2.5 text-body-md font-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Message Details */}
                <div>
                  <label htmlFor="message" className="text-label-caps font-label-caps text-on-surface-variant font-bold block mb-2">
                    MESSAGE / DESIGN BRIEF *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    placeholder="Tell me about your project, timeline, deliverables, and vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-primary focus:outline-none focus:ring-0 px-0 py-2 text-body-md font-body-md text-primary placeholder:text-on-surface-variant/40 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-on-primary text-label-index font-label-index hover:bg-secondary transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-75 disabled:cursor-not-allowed shadow-sm"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span className="material-symbols-outlined" data-icon="send">
                          send
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
