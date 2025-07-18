import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import StatsSection from "../components/StatsSection";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* hero section */}
      <HeroSection />
      {/* stats section */}
      <StatsSection />
      {/* About Section with Split Layout */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-800 font-medium mb-6">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                About Our Association
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight libre-baskerville-bold">
                Precision in Every
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  Measurement
                </span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Founded in 1985, the Surveyor Association of Nigeria stands as
                the premier organization dedicated to advancing the surveying
                profession across the nation. With over 500 skilled members, we
                deliver accurate land measurements, innovative solutions, and
                contribute to sustainable community development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Professional surveying standards
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Cutting-edge technology integration
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Community-focused development
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl blur opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Professional surveyor team working"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Cards */}
      <MissionSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 libre-baskerville-bold">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Connect with Nigeria's leading surveying professionals and advance
            your career with us.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-teal-400 text-slate-900 font-bold rounded-full hover:bg-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="/members"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
