import { useState } from "react";

function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [flippedCards, setFlippedCards] = useState(new Set());

  // Sample member data
  const members = [
    {
      name: "John Adebayo",
      id: "NAST001",
      role: "Senior Surveyor",
      joinDate: "2020-01-15",
      email: "john.adebayo@nastnigeria.org",
      phone: "+234 801 234 5678",
      location: "Lagos State",
      specialization: "Land Surveying",
      status: "Active",
      licenseNumber: "SUR/LAG/2020/001",
      expiryDate: "2025-12-31",
      bloodGroup: "O+",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Amaka Okeke",
      id: "NAST002",
      role: "Junior Surveyor",
      joinDate: "2022-06-10",
      email: "amaka.okeke@nastnigeria.org",
      phone: "+234 802 345 6789",
      location: "Abuja FCT",
      specialization: "Cadastral Surveying",
      status: "Active",
      licenseNumber: "SUR/FCT/2022/002",
      expiryDate: "2025-12-31",
      bloodGroup: "A+",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Tunde Bello",
      id: "NAST003",
      role: "Senior Surveyor",
      joinDate: "2019-03-22",
      email: "tunde.bello@nastnigeria.org",
      phone: "+234 803 456 7890",
      location: "Ogun State",
      specialization: "Engineering Surveying",
      status: "Active",
      licenseNumber: "SUR/OGU/2019/003",
      expiryDate: "2025-12-31",
      bloodGroup: "B+",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Obidairo Peter",
      id: "NAST004",
      role: "Survey Tech",
      joinDate: "2023-09-05",
      email: "obidairo.peter@nastnigeria.org",
      phone: "+234 816 541 4901",
      location: "Ifo Zone",
      specialization: "Hydrographic Surveying",
      status: "Active",
      licenseNumber: "SUR/OGU/2023/004",
      expiryDate: "2025-12-31",
      bloodGroup: "AB+",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
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

  // Format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
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
        
        .barcode-lines {
          background: repeating-linear-gradient(
            90deg,
            #000 0px,
            #000 1px,
            transparent 1px,
            transparent 2px,
            #000 2px,
            #000 3px,
            transparent 3px,
            transparent 5px
          );
          height: 30px;
        }
        
        .security-pattern {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(0,100,0,0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(0,150,0,0.1) 0%, transparent 50%);
        }
      `}</style>

      {/* Header Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 font-medium mb-6 backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Official Members Directory
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              NAST
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                {" "}Members
              </span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-4">
              Nigeria Association of Surveyors & Topographers
            </p>
            <p className="text-sm text-emerald-300 font-medium">
              📄 Click on any ID card to view both sides • Official identification cards
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-slate-200 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-semibold text-slate-700 mb-2">
                Search Members
              </label>
              <div className="relative">
                <svg className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  id="search"
                  type="text"
                  placeholder="Search by name, ID, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            <div className="md:w-64">
              <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-2">
                Filter by Role
              </label>
              <select
                id="role"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
              >
                <option value="All">All Roles</option>
                <option value="Senior Surveyor">Senior Surveyor</option>
                <option value="Junior Surveyor">Junior Surveyor</option>
                <option value="Survey Tech">Survey Tech</option>
              </select>
            </div>
          </div>
        </div>

         {/* Members Grid - UPDATED CARD DESIGN */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {filteredMembers.map((member) => (
          <div key={member.id} className="flex justify-center">
            <div 
              className={`w-96 h-[600px] flip-card cursor-pointer transform hover:scale-105 transition-transform duration-300 ${
                flippedCards.has(member.id) ? "flipped" : ""
              }`}
              onClick={() => handleCardFlip(member.id)}
            >
              <div className="flip-card-inner">
                {/* UPDATED FRONT SIDE - Modern Design */}
                <div className="flip-card-front">
                  <div className="w-full h-full bg-white rounded-xl shadow-xl overflow-hidden border border-emerald-100 relative">
                    {/* Modern Gradient Header */}
                    <div className="h-24 bg-gradient-to-r from-emerald-600 to-green-500 relative overflow-hidden">
                      {/* Subtle Pattern */}
                      <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
                      }}></div>
                      
                      <div className="relative z-10 p-4 flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="bg-white/20 p-1 rounded-lg">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="font-bold text-white text-lg">NAST</h3>
                            <p className="text-xs text-emerald-100">Nigeria Association</p>
                          </div>
                        </div>
                        
                        {/* Holographic Element */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-emerald-200 flex items-center justify-center shadow-lg">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-300 flex items-center justify-center">
                            <span className="text-xs font-bold text-white">★</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Photo and Identity Section */}
                    <div className="px-6 py-4 relative">
                      <div className="flex gap-6 items-center">
                        {/* Modern Profile Frame */}
                        <div className="relative">
                          <div className="w-28 h-32 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* Status Indicator */}
                          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(member.status)} shadow-md`}>
                            {member.status}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="mb-3">
                            <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider">Full Name</p>
                            <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                          </div>
                          
                          <div className="space-y-2">
                            <div>
                              <p className="text-xs font-medium text-gray-500">Professional Grade</p>
                              <p className="font-semibold text-gray-800">{member.role}</p>
                            </div>
                            
                            <div>
                              <p className="text-xs font-medium text-gray-500">Member ID</p>
                              <p className="font-mono font-bold text-emerald-700">{member.id}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Info Grid */}
                    <div className="px-6 pb-6">
                      <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Specialization</p>
                          <p className="text-sm font-semibold text-gray-800">{member.specialization}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Location</p>
                          <p className="text-sm font-semibold text-gray-800">{member.location}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Issued</p>
                          <p className="text-sm font-semibold text-gray-800">{formatDate(member.joinDate)}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Expires</p>
                          <p className="text-sm font-semibold text-red-600">{formatDate(member.expiryDate)}</p>
                        </div>
                      </div>
                    </div>

                    {/* License Section */}
                    <div className="px-6 pb-4">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-xs font-medium text-gray-500 mb-1">License Number</p>
                        <div className="flex justify-between items-center">
                          <p className="font-mono text-sm font-semibold text-gray-900">{member.licenseNumber}</p>
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Elegant Footer */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-50 to-green-50 border-t border-emerald-100">
                      <div className="px-6 py-3 flex justify-between items-center">
                        <div className="text-xs text-emerald-700 font-medium">
                          <p>VALID ID CARD</p>
                          <p className="text-[10px] text-emerald-600">www.nastnigeria.org</p>
                        </div>
                        <div className="flex items-center">
                          <span className="text-xs text-emerald-700 mr-2">Tap to flip</span>
                          <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BACK SIDE - Updated with Blood Group */}
                <div className="flip-card-back">
                  <div className="w-full h-full bg-white rounded-xl shadow-xl overflow-hidden border border-emerald-100 relative">
                    {/* Gradient Header */}
                    <div className="h-24 bg-gradient-to-r from-emerald-700 to-green-600 relative overflow-hidden">
                      <div className="relative z-10 p-4 flex justify-between items-center">
                        <h3 className="text-white font-bold">MEMBER DETAILS</h3>
                        <div className="text-emerald-200 text-sm">EMERGENCY INFO</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-4 space-y-6">
                      {/* Contact Section */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-emerald-700 text-sm uppercase tracking-wide border-b border-emerald-100 pb-2">
                          Contact Information
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-emerald-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <p className="text-xs font-medium text-gray-500">Email</p>
                              <p className="text-sm font-medium text-gray-800">{member.email}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <svg className="w-5 h-5 text-emerald-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div>
                              <p className="text-xs font-medium text-gray-500">Phone</p>
                              <p className="text-sm font-medium text-gray-800">{member.phone}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Medical Section */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-emerald-700 text-sm uppercase tracking-wide border-b border-emerald-100 pb-2">
                          Medical Information
                        </h4>
                        <div className="flex items-center bg-red-50 rounded-lg p-3">
                          <div className="bg-white p-2 rounded-lg mr-3 shadow-sm">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-medium text-gray-500">Blood Group</p>
                            <p className="text-lg font-bold text-red-600">{member.bloodGroup}</p>
                          </div>
                        </div>
                      </div>

                      {/* Verification */}
                      <div className="space-y-3">
                        <h4 className="font-bold text-emerald-700 text-sm uppercase tracking-wide border-b border-emerald-100 pb-2">
                          Card Verification
                        </h4>
                        <div className="flex items-center justify-between bg-emerald-50 rounded-lg p-3">
                          <div>
                            <p className="text-xs font-medium text-emerald-700 mb-1">Verify at:</p>
                            <p className="text-sm font-semibold text-emerald-800">verify.nastnigeria.org</p>
                            <p className="text-xs font-mono text-gray-600 mt-1">Code: {member.id}</p>
                          </div>
                          <div className="bg-white p-2 rounded-lg shadow">
                            <div className="w-16 h-16 bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center text-gray-400">
                              QR
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms Footer */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-50 to-green-50 border-t border-emerald-100 p-4">
                      <p className="text-xs text-gray-600 text-center">
                        This card is property of NAST Nigeria • Must be returned upon request
                      </p>
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
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">No Members Found</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Adjust your search or filter criteria to find registered members.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MembersPage;