import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images for carousel
  const backgroundImages = [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handle dot navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
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

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-30 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Floating Badge */}
        <div className="mb-7 inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-teal-300 text-sm font-medium animate-pulse">
          <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 animate-pulse"></span>
          Excellence in Surveying Since 1985
        </div>

        {/* Main Title */}
        <div className="mb-8 space-y-4 libre-baskerville-bold">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-black text-white leading-tight">
            <span className="block mb-2">
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                NIGERIAN ASSOCIATION
              </span>
            </span>
            <span className="block mb-2">
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                OF SURVEY TECHNICIAN
              </span>
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 mt-6 tracking-wider">
              N.A.S.T IFO ZONE
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-16 max-w-4xl">
          <p className="text-xl md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-light tracking-wide">
            Leading excellence in surveying across Nigeria with{" "}
            <span className="text-teal-400 font-medium">precision</span>,{" "}
            <span className="text-blue-400 font-medium">innovation</span>, and{" "}
            <span className="text-cyan-400 font-medium">integrity</span>.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <a
            href="/contact"
            className="group relative px-10 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold rounded-full hover:from-teal-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-teal-500/25 transform hover:-translate-y-2 hover:scale-105"
          >
            <span className="relative z-10 text-lg">Join Our Community</span>
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/members"
            className="group px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-2xl hover:shadow-white/10 transform hover:-translate-y-2 hover:scale-105"
          >
            <span className="text-lg">Explore Services</span>
          </a>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSlide
                ? "bg-teal-400 border-teal-400 scale-125"
                : "bg-white/40 border-white/20 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
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

        .animate-float {
          animation: float 6s ease-in-out infinite;
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
      `}</style>
    </section>
  );
};

export default HeroSection;
