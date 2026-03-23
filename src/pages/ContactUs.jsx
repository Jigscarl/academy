import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
        setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="contact-page" style={{ padding: '4rem 0', minHeight: 'calc(100vh - 4rem)' }}>
      <div className="container">

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Contact Us</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Have any questions or need support? We're here to help! Reach out to our team using the form below or our contact details.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>Get In Touch</h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Email</h4>
                  <a href="mailto:brodangacademy@gmail.com" style={{ color: 'var(--text-muted)' }}>brodangacademy@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--success-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Phone</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>+254 745 150 762</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--warning-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>Location</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Business Hours</h3>
              <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                <span>Monday - Friday</span> <span>08:00 AM - 05:00 PM</span>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>
                <span>Saturday</span> <span>09:00 AM - 02:00 PM</span>
              </p>
              <p style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Sunday</span> <span>Closed</span>
              </p>
            </div>
          </div>

          {/* Contact Form integrated with Formspree pattern */}
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2.5rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>Send Us a Message</h3>
            
            {status === 'SUCCESS' && (
              <div style={{ backgroundColor: '#ecfdf5', color: '#065f46', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={20} />
                <span>Message sent successfully! We will get back to you soon.</span>
              </div>
            )}
            {status === 'ERROR' && (
              <div style={{ backgroundColor: '#fef2f2', color: '#991b1b', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                Oops! There was a problem submitting your form. Please try again.
              </div>
            )}

            <form action="https://formspree.io/f/xojkgaqb" method="POST" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontWeight: 500 }}>Full Name</label>
                <input type="text" id="name" name="name" required placeholder="Newton Doe" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', transition: 'border-color 0.2s' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontWeight: 500 }}>Email Address</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', transition: 'border-color 0.2s' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="subject" style={{ fontWeight: 500 }}>Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="How can we help?" style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', transition: 'border-color 0.2s' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontWeight: 500 }}>Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Write your message here..." style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid var(--border-color)', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }}></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', fontSize: '1.1rem', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
                <Send size={20} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem' }}>
                We typically respond within 24 hours.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
