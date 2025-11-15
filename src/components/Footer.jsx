import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Simple background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-2xl font-bold text-white">NAST</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Leading excellence in surveying across Nigeria since 1989.
                Committed to precision and professional development.
              </p>

              {/* Simple Social Links */}
              <div className="flex space-x-4">
                {["twitter", "linkedin", "youtube"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 group"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Navigate</h3>
              <ul className="space-y-3">
                {["Home", "About", "Services", "Members", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`/${link.toLowerCase()}`}
                        className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">
                    Km 4, Along Ibogun/Ifo Road, S.I.A Bus Stop, Oko-Ireke, Ifo
                    Ogun State
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">+234 803 392 9146</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">info@nastnigeria.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Nigerian Association of Surveying Technologists.
              All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-gray-500 hover:text-emerald-400 transition-colors duration-200"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
