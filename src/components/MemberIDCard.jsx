import { Shield, Phone, Award, Briefcase, Star } from "lucide-react";
import QRCodeSVG from "react-qr-code";
import logo from '../assets/logo.png'
const MemberIDCard = ({ member }) => {
  return (
    <div className="w-[120mm] h-[80mm] bg-white border border-emerald-200 rounded-3xl shadow-2xl overflow-hidden relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header with Gradient */}
      <div className="relative h-16 bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 p-2">
        {/* NAST Logo and Title */}
        <div className="absolute top-2 left-6 flex items-center space-x-3">
          <div className="w-12 h-12 rounded-2xl shadow-lg">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-white flex">
            <div className="text-xl font-bold leading-tight me-1">NAST</div>
            <div className="text-lg font-medium opacity-95">IFO ZONE</div>
          </div>
        </div>

        {/* Member ID */}
        <div className="absolute top-4 right-6 text-right">
          <div className="text-xs text-white opacity-90 font-medium">MEMBER ID</div>
          <div className="text-lg text-white font-semibold tracking-wide">{member.id || "NAST001"}</div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 200 25" className="w-full h-4 text-emerald-500">
            <path 
              d="M0,0 Q100,25 200,0 L200,25 L0,25 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Main Content - Compact Layout */}
      <div className="flex h-[calc(100%-5rem)] p-4">
        {/* Left Section - Photo and Name */}
        <div className="w-1/3 block items-center space-x-3">
          {/* Photo */}
          <div className="w-27 h-30 rounded-xl border-2 border-emerald-500 shadow-md overflow-hidden bg-gray-100">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
              }}
            />
          </div>

          {/* Name and Role */}
          <div className="flex-1">
            <h2 className="text-[14px] font-bold text-slate-900 leading-tight my-2">
              {member.name || "Member Name"}
            </h2>
            
            <div className="bg-gradient-to-r w-27 from-emerald-500 to-green-500 text-white text-[14px] font-semibold py-1 text-center rounded-lg">
              {member.role || "Survey Tech"}
            </div>
          </div>
        </div>

        {/* Center Section - Member Details */}
        <div className="flex-1 px-2 flex flex-col justify-center">
          <div className="space-y-3">
            {/* License Number */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-600 font-medium">License Number</div>
                <div className="text-sm font-semibold text-slate-900">
                  {member.license_number || "SUR/OGN/2024/001"}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-600 font-medium">Phone Number</div>
                <div className="text-sm font-semibold text-slate-900">
                  {member.phone || "+234 812 345 6789"}
                </div>
              </div>
            </div>

            {/* Specialization */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-gray-600 font-medium">Specialization</div>
                <div className="text-sm font-semibold text-slate-900">
                  {member.specialization || "Land Surveying"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - QR Code */}
        <div className="w-1/4 flex flex-col items-center justify-center">
          <div className="text-center mb-2">
            <div className="text-xs text-gray-700 font-bold">VERIFICATION</div>
            <div className="text-xs text-gray-500">Scan to verify</div>
          </div>
          
          {member?.id && (
            <div className="bg-white p-2 rounded-xl border border-emerald-200 shadow-md">
              <QRCodeSVG
                value={`NAST-${member.id}-${member.license_number || "SUR001"}-${member.name || "Member"}`}
                size={60}
                level="M"
              />
            </div>
          )}
          
          <div className="text-center mt-2">
            <div className="text-xs text-emerald-600 font-bold font-mono">
              ID: {member.id || "NAST001"}
            </div>
            <div className="text-xs text-gray-500 font-medium">
              Valid {new Date().getFullYear()}-{new Date().getFullYear() + 2}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-green-500 text-white text-center py-2">
        <div className="text-sm font-semibold tracking-tight">NIGERIAN ASSOCIATION OF SURVEY TECHNICIANS</div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 right-12 w-6 h-6 bg-emerald-300 rounded-full opacity-20"></div>
      <div className="absolute top-12 right-16 w-4 h-4 bg-green-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-12 left-12 w-5 h-5 bg-emerald-200 rounded-full opacity-25"></div>
      
      {/* Subtle gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-50 opacity-30 pointer-events-none"></div>
    </div>
  );
};
export default MemberIDCard;