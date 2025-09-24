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
    }, 5000); // Reduced from 8s to 5s for better engagement

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden font-sans">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              animation:
                index === currentSlide ? "zoomEffect 10s ease-in-out infinite" : "none",
            }}
          />
        ))}
      </div>

      {/* Enhanced Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/60 z-10" />

      {/* Green Accent Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-transparent to-green-800/30 z-10" />

      {/* Content Container */}
      <div className="relative z-20 min-h-screen flex items-center py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8">
              {/* Floating Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/15 backdrop-blur-sm rounded-full border border-emerald-400/30 text-emerald-300 text-sm font-medium animate-float mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                Excellence in Surveying Since 1985
              </div>

              {/* Main Title */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-3xl sm:text-3xl md:text-3xl font-bold text-white leading-tight">
                  <span className="block mb-2 md:mb-3 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    NIGERIAN ASSOCIATION
                  </span>
                  <span className="block mb-2 md:mb-3 bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                    OF SURVEY TECHNICIANS
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl text-white/95 mt-4 md:mt-6 tracking-wider font-semibold">
                    N.A.S.T IFO ZONE
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="space-y-4">
                <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Leading excellence in surveying across Nigeria with{" "}
                  <span className="text-emerald-400 font-semibold">precision</span>
                  ,{" "}
                  <span className="text-green-400 font-semibold">innovation</span>
                  , and{" "}
                  <span className="text-lime-400 font-semibold">integrity</span>.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6 justify-center lg:justify-start">
                <a
                  href="/contact"
                  className="group relative px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg hover:from-emerald-500 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
                >
                  <span className="relative z-10">Join Our Community</span>
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/members"
                  className="group px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-emerald-400/30 hover:bg-emerald-500/15 hover:border-emerald-400/60 transition-all duration-300 shadow-lg hover:shadow-emerald-400/20 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
                >
                  <span>Explore Members</span>
                </a>
              </div>
            </div>

            {/* Right Side - Enhanced Visual Element */}
            <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                {/* Animated Circles */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-full h-full border-2 border-emerald-400/30 rounded-full animate-spin-slow">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-400 rounded-full"></div>
                  </div>
                  <div className="absolute w-4/5 h-4/5 border-2 border-green-400/40 rounded-full animate-spin-reverse">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="absolute w-3/5 h-3/5 border-2 border-lime-400/50 rounded-full animate-pulse">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-lime-400 rounded-full"></div>
                  </div>
                  <div className="w-2/5 h-2/5 bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-full backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center">
                    <div className="text-xl font-bold text-emerald-400">N.A.S.T</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-emerald-400 shadow-lg shadow-emerald-400/50"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            "Roboto", sans-serif;
        }

        @keyframes zoomEffect {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
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
            transform: translateY(-6px);
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
          animation: spin-slow 25s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 20s linear infinite;
        }

        /* Enhanced responsive adjustments */
        @media (max-width: 640px) {
          .text-4xl {
            font-size: 2rem;
          }
          .text-5xl {
            font-size: 2.5rem;
          }
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