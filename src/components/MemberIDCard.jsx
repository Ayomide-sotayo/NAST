import { Shield, Phone, Award, Briefcase, Star } from "lucide-react";
import QRCodeSVG from "react-qr-code";
import logo from "../assets/logo.png";
const MemberIDCard = ({ member }) => {
  return (
    <div
      className="w-[90mm] h-[120mm] bg-white rounded-2xl shadow-2xl overflow-hidden relative"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-full h-full object-cover "
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face";
          }}
        />
        {/* Gradient Overlay - transparent at top, deep green at bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,#064e3b_90%)]"></div>
      </div>

      {/* Top Section - Logo and RC Number */}
      <div className="relative z-10 pt-6 px-4 flex flex-col items-end">
        {/* Organization Logo/Seal */}

        <img
          src={logo}
          alt="NAST Logo"
          className="w-20 h-20 object-contain mb-2"
        />

        {/* RC Number Badge */}
        <div className="bg-red-500 text-white px-1.5 py-1.5 rounded-lg shadow-md">
          <div className="text-[12px] font-bold tracking-tight">RC.NO.5424</div>
        </div>
      </div>

      {/* Bottom Section - Member Info on Green Background */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 pt-8">
        {/* NAST IFO ZONE */}
        <div className="mb-2 flex">
          <div className="text-yellow-400 text-2xl font-bold tracking-wide leading-none">
            NAST <span className="font-medium text-white">IFO ZONE</span>
          </div>
        </div>

        {/* Role Label */}
        <div className="text-white text-xs font-semibold mb-1 opacity-80">
          {member.role || "SURV TECH."}
        </div>

        {/* Member Name */}
        <div className="text-white text-sm font-bold leading-tight mb-2">
          SURV. {member.name || "OBIDAIRO PETER OLADIMEJI"}
        </div>

        {/* Phone Number */}
        <div className="flex items-center space-x-2 text-white">
          <Phone className="w-4 h-4" />
          <div className="text-sm font-medium">
            {member.phone || "08165414901"}
          </div>
        </div>
      </div>

      {/* QR Code - Bottom Right */}
      <div className="absolute bottom-6 right-6 z-10">
        {member?.id && (
          <div className="bg-white p-1.5 rounded-lg shadow-lg">
            <QRCodeSVG
              value={`${window.location.origin}/member/${member.id}`}
              size={70}
              level="M"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default MemberIDCard;
