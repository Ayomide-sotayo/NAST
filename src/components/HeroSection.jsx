import React, { useState, useEffect } from "react";
import nast1 from "../assets/nast1.jpg";
import nast2 from "../assets/nast2.jpg";
import nast3 from "../assets/nast3.jpg";
import nast4 from "../assets/nast4.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for carousel
  const backgroundImages = [nast1, nast2, nast3, nast4];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden font-sans">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              animation:
                index === currentSlide ? "zoomEffect 8s infinite" : "none",
            }}
          />
        ))}
      </div>

      {/* Enhanced Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 z-10" />

      {/* Green Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-transparent to-green-800/20 z-10" />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-emerald-400 shadow-lg shadow-emerald-400/50"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex py-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Floating Badge */}
              <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-emerald-500/10 backdrop-blur-md rounded-full border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-medium animate-float">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                Excellence in Surveying Since 1985
              </div>

              {/* Main Title */}
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-2xl  md:text-2xl lg:text-3xl xl:text-5xl font-black text-white leading-tight tracking-tight">
                  <span className="block mb-2 sm:mb-3">
                    <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
                      NIGERIAN ASSOCIATION
                    </span>
                  </span>
                  <span className="block mb-2 sm:mb-3">
                    <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
                      OF SURVEY TECHNICIAN
                    </span>
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-white/95 mt-4 sm:mt-6 tracking-widest font-mono">
                    N.A.S.T IFO ZONE
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                  Leading excellence in surveying across Nigeria with{" "}
                  <span className="text-emerald-400 font-medium">
                    precision
                  </span>
                  ,{" "}
                  <span className="text-green-400 font-medium">innovation</span>
                  , and{" "}
                  <span className="text-lime-400 font-medium">integrity</span>.
                </p>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full hover:from-emerald-500 hover:to-green-500 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1 hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 text-base sm:text-lg">
                    Join Our Community
                  </span>
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/members"
                  className="group px-6 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-full border-2 border-emerald-400/40 hover:bg-emerald-500/10 hover:border-emerald-400/60 transition-all duration-300 shadow-xl hover:shadow-emerald-400/20 transform hover:-translate-y-1 active:scale-95"
                >
                  <span className="text-base sm:text-lg">Explore Services</span>
                </a>
              </div>
            </div>

            {/* Right Side - Enhanced Visual Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Animated Circles */}
                <div className="relative w-96 h-96 flex items-center justify-center">
                  <div className="absolute w-80 h-80 border-2 border-emerald-400/30 rounded-full animate-spin-slow">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div className="absolute w-64 h-64 border-2 border-green-400/40 rounded-full animate-spin-reverse">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="absolute w-48 h-48 border-2 border-lime-400/50 rounded-full animate-pulse">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-lime-400 rounded-full"></div>
                  </div>
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center">
                    <div className="text-2xl font-bold text-emerald-400">
                      N.A.S.T
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap");

        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", sans-serif;
        }

        .font-mono {
          font-family: "JetBrains Mono", "SF Mono", Monaco, "Cascadia Code",
            "Roboto Mono", Consolas, "Courier New", monospace;
        }

        @keyframes zoomEffect {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        /* Enhanced responsive font scaling */
        @media (max-width: 640px) {
          h1 {
            line-height: 1.1;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Better button interactions on mobile */
        @media (hover: none) and (pointer: coarse) {
          .group:hover {
            transform: none;
          }
          .group:active {
            transform: scale(0.95);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
