import { Shield } from "lucide-react";
import QRCodeSVG from "react-qr-code";

const MemberIDCard = ({ member }) => {
  console.log("QRCodeSVG:", QRCodeSVG);
  console.log("Shield:", Shield);

  return (
    <div className="w-[85mm] h-[54mm] bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-300 rounded-xl shadow-lg overflow-hidden relative">
      {/* Watermark */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDc5NmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>

      {/* Card Header */}
      <div className="bg-gradient-to-r from-emerald-700 to-green-700 py-2 px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="text-white w-5 h-5 mr-2" />
          <span className="text-white text-sm font-bold tracking-wider">
            NAST MEMBER ID
          </span>
        </div>
        <div className="text-xs text-emerald-200 font-mono">#{member.id}</div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex">
        {/* Left - Photo and QR */}
        <div className="flex flex-col items-center mr-4">
          <div className="w-20 h-20 border-2 border-emerald-600 rounded-lg overflow-hidden bg-white">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
              }}
            />
          </div>
          <div className="mt-2 bg-white p-1 rounded">
            {member?.id && (
              <QRCodeSVG
                value={`${window.location.origin}/members/${member.id}`}
                size={40}
                level="M"
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            )}
          </div>
        </div>

        {/* Right - Member Details */}
        <div className="flex-1">
          <h3 className="font-bold text-slate-800 text-lg mb-1">
            {member.name}
          </h3>
          <div className="space-y-1 text-xs">
            <div className="flex">
              <span className="text-slate-600 w-20">Role:</span>
              <span className="font-medium text-slate-800">{member.role}</span>
            </div>
            <div className="flex">
              <span className="text-slate-600 w-20">Specialty:</span>
              <span className="font-medium text-slate-800">
                {member.specialization}
              </span>
            </div>
            <div className="flex">
              <span className="text-slate-600 w-20">Location:</span>
              <span className="font-medium text-slate-800">
                {member.location}
              </span>
            </div>
            <div className="flex">
              <span className="text-slate-600 w-20">License:</span>
              <span className="font-medium text-slate-800 truncate">
                {member.license_number}
              </span>
            </div>
            <div className="flex">
              <span className="text-slate-600 w-20">Blood Group:</span>
              <span className="font-medium text-slate-800">
                {member.blood_group || "N/A"}
              </span>
            </div>
            <div className="mt-2 pt-2 border-t border-slate-200 text-[10px] text-slate-500">
              Valid until: Dec 31, {new Date().getFullYear() + 2}
            </div>
          </div>
        </div>
      </div>

      {/* Association Seal */}
      <div className="absolute bottom-2 right-2 text-[8px] text-center text-slate-500">
        <div className="font-bold">NAST NIGERIA</div>
        <div className="font-light">Surveyors & Topographers</div>
      </div>
    </div>
  );
};

export default MemberIDCard;
