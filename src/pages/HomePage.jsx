function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section with Glassmorphism */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
          {/* Floating Badge */}
          <div className="mb-8 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-teal-300 text-sm font-medium">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
            Excellence in Surveying Since 1985
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              NIGERIAN ASSOCIATION OF SURVEY TECHNICIAN 
            </span>
            <br />
            <span className="text-white">N.A.S.T IFO ZONE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
            Leading excellence in surveying across Nigeria with precision, innovation, and integrity.
          </p>
          
          {/* Hero Image with 3D Effect */}
          <div className="relative mb-12 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Professional surveyor with equipment"
              className="relative w-full max-w-4xl h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6">
            <a href="/contact" className="group relative px-8 py-4 bg-teal-400 text-slate-900 font-bold rounded-full hover:bg-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="relative z-10">Join Our Community</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="/members" className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore Services
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">500+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">38</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">1000+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L15.09 9.74L12 16L8.91 9.74L2 9L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">36</h3>
              <p className="text-gray-600">States Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Split Layout */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 rounded-full text-teal-800 font-medium mb-6">
                <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                About Our Association
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Precision in Every
                <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"> Measurement</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Founded in 1985, the Surveyor Association of Nigeria stands as the premier organization 
                dedicated to advancing the surveying profession across the nation. With over 500 skilled 
                members, we deliver accurate land measurements, innovative solutions, and contribute to 
                sustainable community development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-4"></div>
                  <span className="text-gray-700">Professional surveying standards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-4"></div>
                  <span className="text-gray-700">Cutting-edge technology integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-4"></div>
                  <span className="text-gray-700">Community-focused development</span>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To uphold integrity, promote innovation, and support our members in delivering 
              top-tier surveying services to Nigeria and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrity First</h3>
              <p className="text-gray-700 leading-relaxed">
                Maintaining the highest ethical standards in all our surveying practices and professional conduct.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation Drive</h3>
              <p className="text-gray-700 leading-relaxed">
                Embracing cutting-edge technology and modern techniques to advance the surveying profession.
              </p>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM16 14C18.39 14 22 15.21 22 17V20H10V17C10 15.21 13.61 14 16 14ZM8 12C10.21 12 12 10.21 12 8C12 5.79 10.21 4 8 4C5.79 4 4 5.79 4 8C4 10.21 5.79 12 8 12ZM8 14C5.33 14 0 15.34 0 18V20H8V17C8 16.22 8.22 15.5 8.63 14.88C8.28 14.82 7.9 14.8 7.5 14.8C7.33 14.8 7.17 14.81 7 14.82C6.88 14.83 6.77 14.85 6.65 14.87C6.54 14.89 6.42 14.91 6.31 14.94C6.21 14.96 6.1 14.99 6 15.02C5.9 15.04 5.8 15.07 5.7 15.1C5.6 15.13 5.5 15.16 5.41 15.19C5.31 15.23 5.22 15.26 5.13 15.3C5.04 15.34 4.95 15.38 4.87 15.42C4.78 15.46 4.7 15.51 4.62 15.55C4.54 15.6 4.46 15.65 4.39 15.7C4.32 15.75 4.25 15.8 4.18 15.86C4.12 15.91 4.06 15.97 4 16.03V18H8V14Z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Supporting our members and contributing to sustainable development across Nigerian communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Connect with Nigeria's leading surveying professionals and advance your career with us.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/contact" className="group relative px-8 py-4 bg-teal-400 text-slate-900 font-bold rounded-full hover:bg-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span className="relative z-10">Get Started Today</span>
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="/members" className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;