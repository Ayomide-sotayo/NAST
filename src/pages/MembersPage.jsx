import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [flippedCards, setFlippedCards] = useState(new Set());

  // Sample member data
  const members = [
    {
      name: "John Adebayo",
      id: "SURV001",
      role: "Senior Surveyor",
      joinDate: "2020-01-15",
      email: "john.adebayo@nastnigeria.org",
      phone: "+234 801 234 5678",
      location: "Lagos State",
      specialization: "Land Surveying",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Amaka Okeke",
      id: "SURV002",
      role: "Junior Surveyor",
      joinDate: "2022-06-10",
      email: "amaka.okeke@nastnigeria.org",
      phone: "+234 802 345 6789",
      location: "Abuja FCT",
      specialization: "Cadastral Surveying",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Tunde Bello",
      id: "SURV003",
      role: "Senior Surveyor",
      joinDate: "2019-03-22",
      email: "tunde.bello@nastnigeria.org",
      phone: "+234 803 456 7890",
      location: "Ogun State",
      specialization: "Engineering Surveying",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Obidairo Peter",
      id: "SURV004",
      role: "Survey Tech",
      joinDate: "2023-09-05",
      email: "obidairo.peter@nastnigeria.org",
      phone: "+234 816 541 4901",
      location: "Ifo Zone",
      specialization: "Hydrographic Surveying",
      status: "Active",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  // Filter members
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "All" || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  // Handle card flip
  const handleCardFlip = (memberId) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(memberId)) {
      newFlippedCards.delete(memberId);
    } else {
      newFlippedCards.add(memberId);
    }
    setFlippedCards(newFlippedCards);
  };

  // Get badge color based on role
  const getRoleBadge = (role) => {
    switch (role) {
      case "Senior Surveyor":
        return "bg-gradient-to-r from-green-700 to-emerald-600";
      case "Junior Surveyor":
        return "bg-gradient-to-r from-green-600 to-teal-600";
      case "Survey Tech":
        return "bg-gradient-to-r from-emerald-600 to-green-500";
      default:
        return "bg-gradient-to-r from-gray-600 to-gray-700";
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Training":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Format join date
  const formatJoinDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 font-['Inter',sans-serif] text-gray-900">
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-900 text-white pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4V2h-4V0h-2v2h-4v2h4zM6 34v4h4v-4h2v-4h-2v-4H6v4H2v2h4zm0-30v4h-4v2h4v4h2V6h4V4H6V0H4v4H2v2h4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
              NAST
            </span>{" "}
            Members Directory
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto font-light">
            Nigeria Association of Surveyors & Topographers
          </p>
          <p className="text-sm text-green-200 mt-2">
            Double-click on any ID card to view the back
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-green-200 max-w-4xl mx-auto transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search Members
              </label>
              <div className="relative">
                <svg
                  className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name, ID, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            <div className="md:w-60">
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Filter by Role
              </label>
              <select
                id="role"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              >
                <option value="All">All Roles</option>
                <option value="Senior Surveyor">Senior Surveyor</option>
                <option value="Junior Surveyor">Junior Surveyor</option>
                <option value="Survey Tech">Survey Tech</option>
              </select>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              {/* ID Card Container with Flip Animation */}
              <div 
                className={`w-80 h-96 flip-card cursor-pointer ${
                  flippedCards.has(member.id) ? "flipped" : ""
                }`}
                onDoubleClick={() => handleCardFlip(member.id)}
              >
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div className="w-full h-full bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-2xl overflow-hidden relative">
                      {/* Decorative Background Pattern */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundRepeat: "repeat",
                        }}
                      ></div>

                      {/* Header */}
                      <div className="relative z-10 p-6 text-center">
                        <div className="flex items-center justify-center mb-4">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mr-3">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-white">NAST</h2>
                            <p className="text-xs text-green-200">Nigeria Association</p>
                          </div>
                        </div>

                        {/* Member Photo */}
                        <div className="mb-6">
                          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                            <img
                              src={member.avatar}
                              alt={`${member.name}'s profile`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Member Info */}
                        <div className="text-center text-white">
                          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                          <p className="text-green-200 font-medium mb-1">{member.role}</p>
                          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                            <p className="text-sm font-mono font-bold">ID: {member.id}</p>
                          </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="absolute top-6 right-6">
                          <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg animate-pulse"></div>
                        </div>
                      </div>

                      {/* Bottom Decorative Elements */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                        <div className="text-white/60 text-xs">
                          <p>Valid Until</p>
                          <p className="font-bold">Dec 2025</p>
                        </div>
                        <div className="text-white/60 text-xs text-right">
                          <p>Double-click</p>
                          <p className="font-bold">to flip</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden relative border-2 border-green-200">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-bold text-lg">Member Details</h3>
                            <p className="text-green-200 text-sm">ID: {member.id}</p>
                          </div>
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Contact Info */}
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                              <p className="text-sm font-medium text-gray-900 break-all">{member.email}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                              <p className="text-sm font-medium text-gray-900">{member.phone}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                              <p className="text-sm font-medium text-gray-900">{member.location}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Specialization</p>
                              <p className="text-sm font-medium text-gray-900">{member.specialization}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h-2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-500 uppercase tracking-wide">Member Since</p>
                              <p className="text-sm font-medium text-gray-900">{formatJoinDate(member.joinDate)}</p>
                            </div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="pt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 uppercase tracking-wide">Status:</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                              {member.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* QR Code Footer */}
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                          <QRCodeSVG value={member.id} size={60} />
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">Verification QR</p>
                          <p className="text-xs text-green-600 font-medium">Scan to verify</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              No Members Found
            </h3>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Adjust your search or filter to find registered members.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MembersPage;