import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png"
// import {Link} from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/members", label: "Members" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-emerald-500/30' 
          : 'bg-slate-900/90 backdrop-blur-sm border-b-2 border-emerald-400'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <a
              href="/"
              className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  {/* Replace with your actual logo */}
                  <img src={logo} className="h-12 w-12" alt="" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-lime-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg lg:text-2xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent leading-tight">
                  NAST IFO
                </span>
                <span className="text-xs text-emerald-300 font-medium -mt-1 hidden sm:block">
                  Survey Excellence
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.to}
                  href={item.to}
                  className="relative px-4 py-2 rounded-lg text-gray-200 hover:text-white transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <a
                href="/join"
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full hover:from-emerald-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 hover:scale-105"
              >
                Join Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center hover:bg-emerald-500/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative">
                {isOpen ? (
                  <X className="w-5 h-5 text-emerald-400" />
                ) : (
                  <Menu className="w-5 h-5 text-emerald-400" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="bg-slate-900/98 backdrop-blur-md border-t border-emerald-500/20">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.to}
                    href={item.to}
                    onClick={() => setIsOpen(false)}
                    className="relative px-4 py-3 rounded-lg text-gray-200 hover:text-white hover:bg-slate-800/70 transition-all duration-300 group"
                    style={{ 
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className="w-4 h-4 text-emerald-400 opacity-60" />
                    </div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-emerald-400 to-green-500 group-hover:h-8 transition-all duration-300 rounded-r-full"></div>
                  </a>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 mt-4 border-t border-emerald-500/20">
                  <a
                    href="/join"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-center rounded-xl hover:from-emerald-500 hover:to-green-500 transition-all duration-300 shadow-lg"
                  >
                    Join Our Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Smooth mobile menu transition */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Enhanced backdrop blur support */
        @supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0)) {
          .backdrop-blur-md {
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
          }
        }

        /* Mobile menu animation improvements */
        @media (max-width: 1024px) {
          .container {
            transition: all 0.3s ease;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;