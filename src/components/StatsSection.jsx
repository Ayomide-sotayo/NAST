import React, { useState, useEffect, useRef } from "react";
import { Users, Calendar, Target, Award, MapPin, CheckCircle, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Active Members",
      description: "Professional surveyors across Nigeria",
      color: "from-emerald-400 to-green-500",
      solidColor: "#10b981",
      bgColor: "#ecfdf5",
    },
    {
      icon: Calendar,
      number: 35,
      suffix: "+",
      label: "Years Experience",
      description: "Excellence in surveying since 1989",
      color: "from-green-400 to-lime-500",
      solidColor: "#22c55e",
      bgColor: "#f0fdf4",
    },
    {
      icon: Target,
      number: 1000,
      suffix: "+",
      label: "Projects Completed",
      description: "Successful surveying projects delivered",
      color: "from-lime-400 to-emerald-500",
      solidColor: "#84cc16",
      bgColor: "#f7fee7",
    },
    {
      icon: Award,
      number: 15,
      suffix: "+",
      label: "Industry Awards",
      description: "Recognition for outstanding service",
      color: "from-emerald-500 to-teal-500",
      solidColor: "#059669",
      bgColor: "#ecfdf5",
    },
    {
      icon: MapPin,
      number: 25,
      suffix: "+",
      label: "States Covered",
      description: "Nationwide surveying coverage",
      color: "from-teal-400 to-green-500",
      solidColor: "#14b8a6",
      bgColor: "#f0fdfa",
    },
    {
      icon: CheckCircle,
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Trusted by clients nationwide",
      color: "from-green-500 to-emerald-600",
      solidColor: "#16a34a",
      bgColor: "#f0fdf4",
    },
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate numbers
          stats.forEach((stat, index) => {
            animateNumber(stat.number, index);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Number animation function
  const animateNumber = (target, index) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setAnimatedNumbers(prev => ({
        ...prev,
        [index]: Math.floor(current)
      }));
    }, 30);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gray-50"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50"></div>
      </div>

      {/* Simplified Floating Shapes - hidden on small screens */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Achievement Metrics
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
            Excellence in{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Four decades of surveying excellence, delivering precision and innovation 
            across Nigeria's diverse landscape
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const displayNumber = animatedNumbers[index] || 0;
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-emerald-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  minHeight: '280px'
                }}
              >
                {/* Simplified Hover Background */}
                <div 
                  className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundColor: stat.bgColor }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4 sm:mb-6">
                    <div 
                      className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br"
                      style={{
                        background: `linear-gradient(135deg, ${stat.solidColor}, ${stat.solidColor}dd)`
                      }}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>

                  {/* Number with Animation */}
                  <div className="mb-3 sm:mb-4">
                    <span 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black"
                      style={{ color: stat.solidColor }}
                    >
                      {displayNumber}{stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-slate-900 transition-colors">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {stat.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div 
                    className="absolute bottom-0 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 h-1 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ backgroundColor: stat.solidColor }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="/join"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center text-base sm:text-lg">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Join Our Growing Community
              </span>
            </a>
            
            <a
              href="/contact"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-emerald-700 font-bold rounded-full border-2 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center text-base sm:text-lg">
                Get Started Today
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
              </span>
            </a>
          </div>
          
          <p className="text-slate-500 mt-4 sm:mt-6 text-xs sm:text-sm">
            Join hundreds of professionals who trust N.A.S.T for excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;