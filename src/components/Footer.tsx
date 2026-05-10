import { Brain, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0A1628] border-t border-[rgba(255,255,255,0.08)]" style={{ zIndex: 2 }}>
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Left - Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-7 h-7 text-[#2563EB]" />
              <div>
                <span className="font-sans font-bold text-lg text-white block leading-tight">
                  SABSA
                </span>
                <span className="font-mono text-[0.6rem] text-[rgba(255,255,255,0.5)] tracking-[0.1em]">
                  South African Brain Sensory Activation
                </span>
              </div>
            </div>
            <p className="font-mono text-[0.75rem] text-[rgba(255,255,255,0.5)] mt-4">
              &copy; 2026 SABSA. All rights reserved.
            </p>
          </div>

          {/* Center - Founder */}
          <div>
            <span className="font-mono text-[0.75rem] tracking-[0.1em] text-[#06B6D4] block mb-3">
              FOUNDER
            </span>
            <p className="font-semibold text-white">E. S. Mashishi</p>
            <p className="text-[0.875rem] text-[rgba(255,255,255,0.7)] mt-1">
              Master of Anatomy, Physiology and Human Movement
            </p>
          </div>

          {/* Right - Contact */}
          <div>
            <span className="font-mono text-[0.75rem] tracking-[0.1em] text-[#06B6D4] block mb-3">
              CONTACT
            </span>
            <div className="space-y-2">
              <a
                href="tel:+27635517564"
                className="flex items-center gap-2 text-[0.875rem] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                063 551 7564
              </a>
              <a
                href="mailto:hello@sabsa.org.za"
                className="flex items-center gap-2 text-[0.875rem] text-[rgba(255,255,255,0.7)] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@sabsa.org.za
              </a>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="text-[rgba(255,255,255,0.7)] hover:text-[#2563EB] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[rgba(255,255,255,0.7)] hover:text-[#2563EB] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[rgba(255,255,255,0.7)] hover:text-[#2563EB] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-[rgba(255,255,255,0.05)] py-5 text-center">
        <p className="font-mono text-[0.7rem] text-[rgba(255,255,255,0.3)]">
          Designed with care for every brain
        </p>
      </div>
    </footer>
  );
}
