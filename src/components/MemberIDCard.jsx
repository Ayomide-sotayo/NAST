import { Phone, Award } from "lucide-react";
import QRCodeSVG from "react-qr-code";
import logo from "../assets/logo.png";

const MemberIDCard = ({ member }) => {
  return (
    <div
      className="w-[90mm] bg-white rounded-2xl shadow-2xl overflow-hidden relative border-4 border-emerald-800"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Premium Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Header Section with Association Name */}
      <div className="relative z-10 bg-gradient-to-r from-emerald-800 to-emerald-600 py-4 px-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center space-x-1">
            <div className="items-center text-center">
              <img
                src={logo}
                alt="NAST Logo"
                className="w-20 h-20 object-contain"
              />
              <div className="text-[10px] font-bold text-white">RC.NO.5424</div>
            </div>
            <div className="text-center">
              <div className="text-white text-[18px] font-bold leading-tight">
                NIGERIAN ASSOCIATION OF SURVEY TECHNICIANS
              </div>
              <div className="flex justify-center mb-2">
                <div className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-emerald-900 px-3 py-1 rounded-full shadow-md">
                  <div className="text-sm tracking-wide">NAST IFO ZONE</div>
                </div>
              </div>
              <div className="text-yellow-300 text-xs font-semibold italic tracking-wide">
                PROSPECT THROUGH LABOUR
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Photo Section */}
      <div className="relative z-10 px-6 pt-4">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-36 h-36 rounded-full border-4 border-emerald-600 shadow-lg overflow-hidden bg-white">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face";
                }}
              />
            </div>
            <div className="absolute -inset-2 rounded-full border-2 border-yellow-400 opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Member Information Section */}
      <div className="relative z-10 px-4 pt-3 pb-4">
        <div className="bg-white rounded-xl shadow-lg border border-emerald-200 p-3">

          {/* Name */}
          <div className="text-center mb-2 border-b border-emerald-100 pb-2">
            <div className="text-emerald-800 text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">
              Name
            </div>
            <div className="text-emerald-900 text-sm font-bold leading-tight">
              SURV. TECH. {member.name || "OBIDAIRO PETER OLADIMEJI"}
            </div>
          </div>

          {/* Role */}
          <div className="text-center mb-2 border-b border-emerald-100 pb-2">
            <div className="text-emerald-900 text-sm font-bold uppercase">
              {member.role || "SURV TECH."}
            </div>
          </div>

          {/* Phone + QR Code row */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-emerald-100 p-1 rounded-lg flex-shrink-0">
              <Phone className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="flex-1">
              <div className="text-emerald-600 text-xs font-semibold">Phone</div>
              <div className="text-emerald-900 text-sm font-medium">
                {member.phone || "N/A"}
              </div>
            </div>
            {member?.id && (
              <div className="bg-white p-1.5 rounded-lg shadow border border-emerald-200 flex-shrink-0">
                <QRCodeSVG
                  value={`${window.location.origin}/member/${member.id}`}
                  size={55}
                  level="M"
                />
              </div>
            )}
          </div>

          {/* Cert Number row - always visible */}
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-100 p-1 rounded-lg flex-shrink-0">
              <Award className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="flex-1">
              <div className="text-emerald-600 text-xs font-semibold">Cert. No.</div>
              <div className="text-emerald-900 text-sm font-medium">
                {member.cert_number || "N/A"}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom stripe */}
      <div className="relative z-10 h-2 bg-gradient-to-r from-emerald-600 to-yellow-400"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-4 w-6 h-6 bg-emerald-400 rounded-full opacity-20"></div>
    </div>
  );
};

export default MemberIDCard;