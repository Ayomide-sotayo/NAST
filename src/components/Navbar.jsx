import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

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

  // Close menu when window resizes to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Navigation items
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/members", label: "Members" },
    { to: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

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
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-all duration-300 transform hover:scale-105 z-60"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <img src={logo} className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10" alt="NAST IFO Logo" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-lime-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-2xl font-black bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent leading-tight">
                  NAST IFO
                </span>
                <span className="text-xs text-emerald-300 font-medium -mt-1 hidden sm:block">
                  Survey Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative px-4 py-2 rounded-lg text-gray-200 hover:text-white transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-400/10 to-green-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link
                to="/join"
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full hover:from-emerald-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5 hover:scale-105"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center hover:bg-emerald-500/10 transition-all duration-300 z-60"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
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

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden fixed top-16 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'transform translate-y-0 opacity-100' 
            : 'transform -translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="bg-slate-900/98 backdrop-blur-md border-b border-emerald-500/20 shadow-2xl">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeMenu}
                    className="relative px-4 py-4 rounded-lg text-gray-200 hover:text-white hover:bg-slate-800/70 transition-all duration-300 group border-b border-slate-700/50 last:border-b-0"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animation: isOpen ? 'slideInFromLeft 0.4s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-lg">{item.label}</span>
                      <ChevronRight className="w-5 h-5 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 bg-gradient-to-b from-emerald-400 to-green-500 group-hover:h-12 transition-all duration-300 rounded-r-full"></div>
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-6 mt-4">
                  <Link
                    to="/join"
                    onClick={closeMenu}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-center text-lg rounded-xl hover:from-emerald-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
                  >
                    Join Our Community
                  </Link>
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
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Enhanced mobile menu styling */
        @media (max-width: 1024px) {
          .container {
            transition: all 0.3s ease;
          }
          
          /* Ensure menu items are easily tappable */
          .mobile-nav-item {
            min-height: 48px;
            touch-action: manipulation;
          }
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

        /* Smooth transitions for all interactive elements */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Fix for iOS Safari touch targets */
        @media (hover: none) and (pointer: coarse) {
          button, a {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;