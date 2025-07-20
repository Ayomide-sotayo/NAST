import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Award,
  TrendingUp,
  Mail,
  Phone
} from "lucide-react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Professional networking opportunities",
    "Industry-leading certification programs",
    "Access to cutting-edge surveying technology",
    "Career advancement support"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900"></div>
        
        {/* Secondary overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-green-600/30 to-lime-600/20"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-lime-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-teal-400/20 rounded-full blur-3xl animate-float"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className={`inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <Sparkles className="w-4 h-4 mr-2" />
            Join the Excellence
          </div>
          
          {/* Main Headline */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight transition-all duration-700 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Ready to{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-lime-400 bg-clip-text text-transparent">
                Transform
              </span>
              {/* Underline effect */}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full transform scale-x-0 animate-underline-expand"></div>
            </span>
            {" "}Your Career?
          </h2>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            Connect with Nigeria's leading surveying professionals and unlock 
            opportunities in the nation's fastest-growing surveying community
          </p>

          {/* Benefits Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto transition-all duration-700 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center text-left text-emerald-200 group"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="group-hover:text-white transition-colors duration-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-700 delay-500 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <a
              href="/contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Award className="w-5 h-5 mr-3" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="/members"
              className="group px-10 py-5 bg-white/10 backdrop-blur-lg text-white font-bold text-lg rounded-full border-2 border-emerald-400/50 hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              <span className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                Learn More
                <TrendingUp className="w-5 h-5 ml-3 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Contact Info */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 text-emerald-200 transition-all duration-700 delay-600 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            <div className="flex items-center group cursor-pointer hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center mr-3 group-hover:bg-emerald-500/30 transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span>info@nastnigeria.org</span>
            </div>
            
            <div className="flex items-center group cursor-pointer hover:text-white transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 backdrop-blur-sm flex items-center justify-center mr-3 group-hover:bg-emerald-500/30 transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <span>+234 (0) 123 456 7890</span>
            </div>
          </div>

          {/* Trust indicator */}
          <p className={`text-emerald-300/80 mt-8 text-sm transition-all duration-700 delay-700 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            ✨ Trusted by 500+ professionals across Nigeria
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

        @keyframes underlineExpand {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
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

        .animate-underline-expand {
          animation: underlineExpand 1s ease-out 1s forwards;
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

export default CTASection;