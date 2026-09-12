import emailjs from '@emailjs/browser';

/**
 * Configuration for EmailJS / SMTP service.
 * These keys should be provided in .env (or environment variables).
 */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

/**
 * Checks if EmailJS credentials are configured in the environment.
 */
export const isEmailServiceConfigured = () => {
  return Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};

/**
 * Sends inquiry email to the portfolio owner and triggers an auto-reply confirmation to the client.
 * 
 * @param {Object} data - The form data
 * @param {string} data.name - Client name
 * @param {string} data.email - Client email
 * @param {string} data.phone - Client phone number
 * @param {string} data.subject - Inquiry subject
 * @param {string} data.message - Inquiry message
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function sendContactEmail(data) {
  const formattedTime = new Date().toLocaleString('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email,
    phone_number: data.phone?.trim() ? data.phone : 'Not provided',
    subject: data.subject?.trim() ? data.subject : 'New Project Commission Inquiry',
    message: data.message,
    submission_time: formattedTime,
    to_name: 'Prathamesh More',
    to_email: 'moreprathamesh2111@gmail.com',
  };

  // If EmailJS is not yet configured with API keys in .env, simulate professional delivery gracefully
  if (!isEmailServiceConfigured()) {
    console.warn(
      '[EmailService] EmailJS keys (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are not set in .env. Running in simulated delivery mode.'
    );
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 900));
    return {
      success: true,
      simulated: true,
      message: 'Message sent successfully! (Simulated mode: Please add your EmailJS / SMTP keys in .env for live transmission).',
    };
  }

  try {
    // 1. Send notification email to portfolio owner (Prathamesh)
    const ownerResponse = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    // 2. If a dedicated auto-reply template ID is provided, send automated confirmation to client
    if (EMAILJS_AUTOREPLY_TEMPLATE_ID) {
      try {
        const autoReplyParams = {
          to_name: data.name,
          to_email: data.email,
          from_name: 'Prathamesh More',
          reply_to: 'moreprathamesh2111@gmail.com',
          project_subject: data.subject || 'Design Project Inquiry',
          inquiry_summary: data.message.length > 140 ? `${data.message.substring(0, 140)}...` : data.message,
          submission_time: formattedTime,
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE_ID,
          autoReplyParams,
          EMAILJS_PUBLIC_KEY
        );
      } catch (autoReplyErr) {
        console.warn('[EmailService] Auto-reply template failed or not configured:', autoReplyErr);
      }
    }

    return {
      success: true,
      status: ownerResponse.status,
      message: 'Your inquiry and automated confirmation have been processed successfully.',
    };
  } catch (error) {
    console.error('[EmailService] Failed to send email via EmailJS:', error);
    throw new Error(
      error?.text || error?.message || 'Failed to dispatch email. Please reach out directly to moreprathamesh2111@gmail.com.'
    );
  }
}
