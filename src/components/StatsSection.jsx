import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Calendar,
  Target,
  Award,
  MapPin,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

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
      bgGradient: "from-emerald-50 to-green-50",
    },
    {
      icon: Calendar,
      number: 38,
      suffix: "+",
      label: "Years Experience",
      description: "Excellence in surveying since 1985",
      color: "from-green-400 to-lime-500",
      bgGradient: "from-green-50 to-lime-50",
    },
    {
      icon: Target,
      number: 1000,
      suffix: "+",
      label: "Projects Completed",
      description: "Successful surveying projects delivered",
      color: "from-lime-400 to-emerald-500",
      bgGradient: "from-lime-50 to-emerald-50",
    },
    {
      icon: Award,
      number: 15,
      suffix: "+",
      label: "Industry Awards",
      description: "Recognition for outstanding service",
      color: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: MapPin,
      number: 25,
      suffix: "+",
      label: "States Covered",
      description: "Nationwide surveying coverage",
      color: "from-teal-400 to-green-500",
      bgGradient: "from-teal-50 to-green-50",
    },
    {
      icon: CheckCircle,
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Trusted by clients nationwide",
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
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
      { threshold: 0.3 }
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
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background with Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50/30">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-lime-200/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100/80 backdrop-blur-sm rounded-full border border-emerald-200/50 text-emerald-700 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Achievement Metrics
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight">
            Excellence in{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Four decades of surveying excellence, delivering precision and innovation 
            across Nigeria's diverse landscape
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const displayNumber = animatedNumbers[index] || 0;
            
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-emerald-100/50 hover:border-emerald-200/80 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 100}ms forwards` : 'none'
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                  </div>

                  {/* Number with Animation */}
                  <div className="mb-4">
                    <span className={`text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {displayNumber}{stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {stat.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-6 lg:left-8 right-6 lg:right-8 h-1 bg-gradient-to-r ${stat.color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="/join"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <span className="relative z-10 flex items-center text-lg">
                <Award className="w-5 h-5 mr-3" />
                Join Our Growing Community
              </span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="/contact"
              className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-emerald-700 font-bold rounded-full border-2 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center text-lg">
                Get Started Today
                <TrendingUp className="w-5 h-5 ml-3" />
              </span>
            </a>
          </div>
          
          <p className="text-slate-500 mt-6 text-sm">
            Join hundreds of professionals who trust N.A.S.T for excellence
          </p>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(15px) translateX(-15px); }
          66% { transform: translateY(-10px) translateX(15px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        /* Smooth number transitions */
        .text-4xl, .text-5xl, .text-6xl {
          transition: all 0.3s ease;
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;