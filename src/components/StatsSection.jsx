import React from "react";
import {
  Users,
  Calendar,
  Target,
  Award,
  MapPin,
  CheckCircle,
} from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Active Members",
      description: "Professional surveyors across Nigeria",
      color: "text-teal-400",
    },
    {
      icon: Calendar,
      number: "38+",
      label: "Years Experience",
      description: "Excellence in surveying since 1985",
      color: "text-blue-400",
    },
    {
      icon: Target,
      number: "1000+",
      label: "Projects Completed",
      description: "Successful surveying projects delivered",
      color: "text-cyan-400",
    },
    {
      icon: Award,
      number: "15+",
      label: "Industry Awards",
      description: "Recognition for outstanding service",
      color: "text-emerald-400",
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Locations Served",
      description: "Coverage across Nigerian states",
      color: "text-indigo-400",
    },
    {
      icon: CheckCircle,
      number: "98%",
      label: "Client Satisfaction",
      description: "Trusted by clients nationwide",
      color: "text-green-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
              Impact
            </span>{" "}
            in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Delivering exceptional surveying services with measurable results
            across Nigeria
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-3">
                  <span
                    className={`text-4xl md:text-5xl font-bold ${stat.color}`}
                  >
                    {stat.number}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Award className="w-5 h-5 mr-2" />
            Join Our Growing Community
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
