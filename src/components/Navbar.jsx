import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg border-b-2 border-teal-400">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200"
          >
            <img src={logo} alt="" className="w-12 h-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              NAST IFO
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link
              to="/"
              className="relative px-4 py-2 rounded-lg text-gray-200 hover:text-white hover:bg-slate-800 transition-all duration-200 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-teal-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
            </Link>

            <Link
              to="/members"
              className="relative px-4 py-2 rounded-lg text-gray-200 hover:text-white hover:bg-slate-800 transition-all duration-200 group"
            >
              <span className="relative z-10">Members</span>
              <div className="absolute inset-0 bg-teal-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
            </Link>

            <Link
              to="/contact"
              className="relative px-4 py-2 rounded-lg text-gray-200 hover:text-white hover:bg-slate-800 transition-all duration-200 group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-teal-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-200"></div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
