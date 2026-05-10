import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, PhoneCall, Send } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative section-padding"
      style={{
        zIndex: 2,
        background:
          'radial-gradient(ellipse at center, rgba(10,22,40,0.78) 0%, rgba(10,22,40,0.92) 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-16">
          {/* Left - Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-sans font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-[1.1] tracking-[-0.01em]">
              Begin Your Assessment
            </h2>
            <p className="mt-4 text-base text-[rgba(255,255,255,0.7)] leading-relaxed">
              Reach out for a confidential consultation. We will design a brain-body plan just for
              you or your organisation.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#06B6D4]" />
                <a
                  href="tel:+27635517564"
                  className="font-medium text-[1.1rem] text-[#06B6D4] hover:text-[#2563EB] transition-colors"
                >
                  063 551 7564
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[rgba(255,255,255,0.7)]" />
                <a
                  href="mailto:hello@sabsa.org.za"
                  className="text-[0.95rem] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
                >
                  hello@sabsa.org.za
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/27635517564"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-[#E63946] text-white font-semibold text-[0.875rem] tracking-[0.02em] rounded-full px-7 py-3 hover:brightness-110 hover:shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              WhatsApp Booking
            </a>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="glass-card p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[rgba(6,182,212,0.1)] border border-[#06B6D4] flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-[#06B6D4]" />
                  </div>
                  <h3 className="font-semibold text-xl text-white mb-2">Thank You</h3>
                  <p className="text-[#06B6D4]">
                    We will be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Full name"
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      className="w-full bg-[rgba(10,22,40,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-3.5 text-white placeholder-[rgba(255,255,255,0.5)] focus:border-[#06B6D4] focus:shadow-[0_0_12px_rgba(6,182,212,0.2)] focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Email"
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      className="w-full bg-[rgba(10,22,40,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-3.5 text-white placeholder-[rgba(255,255,255,0.5)] focus:border-[#06B6D4] focus:shadow-[0_0_12px_rgba(6,182,212,0.2)] focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Tell us about your needs
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Tell us about your needs (focus, learning, anxiety, elderly balance...)"
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      className="w-full bg-[rgba(10,22,40,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl px-5 py-3.5 text-white placeholder-[rgba(255,255,255,0.5)] focus:border-[#06B6D4] focus:shadow-[0_0_12px_rgba(6,182,212,0.2)] focus:outline-none transition-all duration-300 resize-none min-h-[120px]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#2563EB] text-white font-semibold text-[0.875rem] tracking-[0.02em] rounded-full px-8 py-4 hover:brightness-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
