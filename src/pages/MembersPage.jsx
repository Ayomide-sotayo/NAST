import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  Shield,
  Star,
} from "lucide-react";
import { supabase } from "../supabaseClient";

function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch members from Supabase
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMembers(data || []);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching members:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter members
  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "All" || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Training":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Inactive":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Under Suspension":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  // Generate stars for rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-4 h-4 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-700">Loading members...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Error Loading Members
          </h3>
          <p className="text-slate-600">{error}</p>
          <button
            onClick={fetchMembers}
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
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
              <Shield className="w-4 h-4 mr-2" />
              Official Members Directory
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              NAST
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400 bg-clip-text text-transparent">
                {" "}
                Members
              </span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-4">
              Nigeria Association of Surveyors & Topographers
            </p>
            <p className="text-sm text-emerald-300 font-medium">
              📋 {members.length} Certified Professionals • Connect with experts
              in your area
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-12 border border-white/20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Search Members
              </label>
              <div className="relative">
                <svg
                  className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2"
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
                  placeholder="Search by name, ID, specialization, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                />
              </div>
            </div>
            <div className="md:w-64">
              <label
                htmlFor="role"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Filter by Role
              </label>
              <select
                id="role"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
              >
                <option value="All">All Roles</option>
                <option value="Senior Surveyor">Senior Surveyor</option>
                <option value="Junior Surveyor">Junior Surveyor</option>
                <option value="Survey Tech">Survey Tech</option>
                <option value="Principal Surveyor">Principal Surveyor</option>
              </select>
            </div>
          </div>
        </div>

        {/* Members Grid - Professional Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:scale-105 transform">
                {/* Card Header */}
                <div className="relative h-32 bg-gradient-to-br from-emerald-600 via-green-500 to-teal-500 overflow-hidden">
                  {/* Pattern Overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Ccircle cx='11' cy='11' r='1'/%3E%3Ccircle cx='41' cy='41' r='1'/%3E%3Ccircle cx='29' cy='29' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>

                  {/* Status and ID */}
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                        member.status
                      )}`}
                    >
                      {member.status || "Active"}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 text-white/80 text-sm font-mono">
                    #{member.id}
                  </div>

                  {/* Verification Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Profile Section */}
                <div className="relative px-6 pb-6">
                  {/* Avatar */}
                  <div className="flex justify-center -mt-12 mb-4">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                        <img
                          src={
                            member.avatar ||
                            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                          }
                          alt={member.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src =
                              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-emerald-600 font-semibold mb-2">
                      {member.specialization}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {renderStars(member.rating || 0)}
                      <span className="text-sm text-gray-600 ml-2">
                        ({member.rating || 0})
                      </span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                        <p className="text-sm font-bold text-blue-600">
                          {member.years_experience || 0}
                        </p>
                        <p className="text-xs text-blue-500">Years Exp</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <Award className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <p className="text-sm font-bold text-purple-600">
                          {member.projects_completed || 0}
                        </p>
                        <p className="text-xs text-purple-500">Projects</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-50 rounded-lg p-3">
                        <Star className="w-5 h-5 text-green-600 mx-auto mb-1" />
                        <p className="text-sm font-bold text-green-600">
                          {member.rating || 0}
                        </p>
                        <p className="text-xs text-green-500">Rating</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{member.location || "Location not specified"}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{member.phone}</span>
                    </div>
                  </div>

                  {/* Certificate Info */}
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-4 mb-4 border border-emerald-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium text-emerald-700">
                        Certificate Number
                      </span>
                      <span className="text-xs font-medium text-gray-500">
                        Valid Until
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm font-bold text-emerald-900">
                        {member.cert_number || "Not assigned"}
                      </span>
                      <span className="text-sm font-semibold text-red-600">
                        {formatDate(
                          member.expiry_date ||
                            new Date(new Date().getFullYear() + 2, 11, 31)
                        )}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Contact</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredMembers.length === 0 && members.length > 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-emerald-600"
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
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No Members Found
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Adjust your search or filter criteria to find registered members.
            </p>
          </div>
        )}

        {/* No Members at All */}
        {members.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-12 h-12 text-slate-400"
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
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No Members Yet
            </h3>
            <p className="text-slate-600 max-w-md mx-auto">
              No members have been added to the directory yet. Check back later
              or contact the administrator.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MembersPage;