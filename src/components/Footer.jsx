import logo from '../assets/logo.png'
function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20zM0 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="" className="w-12 h-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                NAST
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Leading excellence in surveying across Nigeria since 1985. Committed to precision, 
              innovation, and professional development in the surveying industry.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="group w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.001 12.017z"/>
                </svg>
              </a>
              <a href="#" className="group w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-400 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Services</a></li>
              <li><a href="/members" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Members</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 transform inline-block">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">+234 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-teal-400 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">info@nastnigeria.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-12 border border-slate-700">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Get the latest news and updates from NAST directly to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-teal-400 text-slate-900 font-semibold rounded-lg hover:bg-teal-300 transition-colors duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <p className="text-gray-400 text-sm">
                &copy; 2025 Surveyor Association of Nigeria. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Crafted with</span>
                <svg className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span className="text-gray-400 text-sm">in Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
    </footer>
  );
}

export default Footer;