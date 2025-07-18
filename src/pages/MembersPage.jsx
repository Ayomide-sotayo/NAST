import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");

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
      name: "Chika Eze",
      id: "SURV004",
      role: "Trainee",
      joinDate: "2023-09-05",
      email: "chika.eze@nastnigeria.org",
      phone: "+234 804 567 8901",
      location: "Enugu State",
      specialization: "Hydrographic Surveying",
      status: "Training",
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

  // Get badge color based on role
  const getRoleBadge = (role) => {
    switch (role) {
      case "Senior Surveyor":
        return "bg-gradient-to-r from-indigo-600 to-blue-600";
      case "Junior Surveyor":
        return "bg-gradient-to-r from-teal-600 to-cyan-600";
      case "Trainee":
        return "bg-gradient-to-r from-purple-600 to-pink-600";
      default:
        return "bg-gradient-to-r from-gray-600 to-gray-700";
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-300";
      case "Training":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  // Format join date
  const formatJoinDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 font-['Inter',sans-serif] text-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-800 via-teal-800 to-green-800 text-white pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4V2h-4V0h-2v2h-4v2h4zM6 34v4h4v-4h2v-4h-2v-4H6v4H2v2h4zm0-30v4h-4v2h4v4h2V6h4V4H6V0H4v4H2v2h4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-transparent">
              NAST
            </span>{" "}
            Members Directory
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-light">
            Official Identification for Certified Surveyors and Topographers of
            Nigeria
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-gray-200 max-w-4xl mx-auto transition-all duration-300 hover:shadow-xl">
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
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  aria-label="Search members by name, ID, or location"
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
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                aria-label="Filter members by role"
              >
                <option value="All">All Roles</option>
                <option value="Senior Surveyor">Senior Surveyor</option>
                <option value="Junior Surveyor">Junior Surveyor</option>
                <option value="Trainee">Trainee</option>
              </select>
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              {/* ID Card Container */}
              <div className="w-full max-w-sm group transform transition-all duration-300 hover:scale-105">
                {/* Role Ribbon */}
                <div className="relative z-10 -mb-4 mx-6">
                  <div
                    className={`${getRoleBadge(
                      member.role
                    )} text-white text-sm font-semibold py-2 px-4 rounded-t-lg shadow-md transition-transform duration-300 group-hover:-translate-y-1`}
                  >
                    {member.role}
                  </div>
                </div>

                {/* ID Card */}
                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200">
                  {/* Card Header */}
                  <div className="h-28 bg-gradient-to-r from-indigo-500 to-teal-500 relative overflow-hidden">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v4h2v-4h4V2h-4V0h-2v2h-4v2h4zM6 34v4h4v-4h2v-4h-2v-4H6v4H2v2h4zm0-30v4h-4v2h4v4h2V6h4V4H6V0H4v4H2v2h4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                      }}
                    ></div>

                    <div className="absolute bottom-0 right-0 text-7xl font-extrabold text-indigo-600/10 transform rotate-12 translate-x-6 translate-y-4">
                      NAST
                    </div>

                    {/* Association Logo */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm shadow-md">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                        </svg>
                      </div>
                      <div className="text-white font-semibold text-xs max-w-[120px] leading-tight">
                        Nigeria Association of Surveyors & Topographers
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          member.status
                        )} shadow-sm`}
                      >
                        {member.status}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    {/* Profile Section */}
                    <div className="flex gap-4 -mt-14">
                      {/* Profile Photo */}
                      <div className="relative">
                        <img
                          src={member.avatar}
                          alt={`${member.name}'s profile`}
                          className="w-20 h-20 rounded-lg object-cover border-3 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="flex-1 pt-3">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {member.name}
                        </h3>
                        <p className="text-xs text-indigo-600 font-medium mb-2">
                          {member.role}
                        </p>
                        <div className="text-xs text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded-md border border-gray-200">
                          ID: {member.id}
                        </div>
                      </div>
                    </div>

                    {/* Details Section */}
                    <div className="mt-5 space-y-3">
                      <div className="flex items-center text-sm">
                        <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center mr-2 text-indigo-600">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide">
                            Location
                          </div>
                          <div className="font-medium text-gray-800">
                            {member.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center text-sm">
                        <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center mr-2 text-indigo-600">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide">
                            Specialization
                          </div>
                          <div className="font-medium text-gray-800">
                            {member.specialization}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center text-sm">
                        <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center mr-2 text-indigo-600">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h-2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide">
                            Member Since
                          </div>
                          <div className="font-medium text-gray-800">
                            {formatJoinDate(member.joinDate)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* QR Code and Validity */}
                    <div className="mt-5 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-1.5 rounded-md border border-gray-200 shadow-sm">
                          <QRCodeSVG value={member.id} size={60} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-indigo-700">
                            Verification QR
                          </div>
                          <div className="text-xs text-gray-500">
                            Scan to verify
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 font-medium">
                          Valid Until
                        </div>
                        <div className="text-sm font-semibold text-indigo-700">
                          Dec 2025
                        </div>
                      </div>
                    </div>

                    {/* Signature and Hologram */}
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        <div className="font-medium">Signature</div>
                        <div className="w-28 h-6 bg-gray-100 rounded-md"></div>
                      </div>
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-indigo-300 to-teal-300 rounded-full opacity-60 animate-pulse"></div>
                        <div className="absolute top-0 left-0 w-14 h-14 flex items-center justify-center text-white font-bold text-xs">
                          NAST
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 py-3 bg-gray-50 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-medium text-indigo-700">
                          Certified
                        </span>
                      </div>
                      <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                        View Profile →
                      </button>
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
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-indigo-600"
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
              Adjust your search or filter to find registered surveyor members.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MembersPage;
