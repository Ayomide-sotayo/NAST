import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const MissionSection = () => {
  const missions = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "Maintaining the highest ethical standards in all our surveying practices and professional conduct.",
      bgGradient: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-100",
      iconGradient: "from-emerald-500 to-teal-500",
      iconBg: "bg-emerald-100"
    },
    {
      icon: Zap,
      title: "Innovation Drive", 
      description: "Embracing cutting-edge technology and modern techniques to advance the surveying profession.",
      bgGradient: "from-teal-50 to-green-50",
      borderColor: "border-teal-100",
      iconGradient: "from-teal-500 to-green-500",
      iconBg: "bg-teal-100"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Supporting our members and contributing to sustainable development across Nigerian communities.",
      bgGradient: "from-green-50 to-lime-50",
      borderColor: "border-green-100",
      iconGradient: "from-green-500 to-lime-500",
      iconBg: "bg-green-100"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-emerald-700 font-medium text-sm ">Our Purpose</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight libre-baskerville-bold">
            Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Mission</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            To uphold integrity, promote innovation, and support our members in delivering 
            top-tier surveying services to Nigeria and beyond.
          </p>
        </div>
        
        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {missions.map((mission, index) => {
            const IconComponent = mission.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${mission.bgGradient} p-8 rounded-3xl border-2 ${mission.borderColor} hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105`}
              >
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-green-200/20 to-lime-200/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-2xl ${mission.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <IconComponent className={`w-10 h-10 bg-gradient-to-br ${mission.iconGradient} bg-clip-text text-transparent`} stroke="url(#gradient)" strokeWidth={2} />
                  </div>
                  
                  {/* SVG Gradient Definitions */}
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors duration-300 libre-baskerville-bold">
                    {mission.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                    {mission.description}
                  </p>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
            <Users className="w-5 h-5 mr-2" />
            <span className="text-lg">Be Part of Our Mission</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;