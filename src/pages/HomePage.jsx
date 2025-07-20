import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import StatsSection from "../components/StatsSection";
import nast4 from "../assets/nast4.jpg"
import CTASection from "../components/CTASection.jsx";

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
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                About Our Association
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight libre-baskerville-bold">
                Precision in Every
                <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent">
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
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Professional surveying standards
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Cutting-edge technology integration
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">
                    Community-focused development
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600 to-green-400 rounded-2xl blur opacity-70"></div>
              <img
                src={nast4}
                alt="Professional surveyor team working"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Cards */}
      <MissionSection />
      <CTASection />
    </div>
  );
}

export default HomePage;
