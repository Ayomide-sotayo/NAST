import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Calendar, Award, Shield, Star, ArrowLeft } from "lucide-react";
import { supabase } from '../supabaseClient';
import MemberIDCard from '../components/MemberIDCard';

function MemberDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMemberDetails();
  }, [id]);

  const fetchMemberDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setMember(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching member details:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 fill-yellow-400/50 text-yellow-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 border-green-200";
      case "Training":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Inactive":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-700">Loading member details...</p>
        </div>
      </div>
    );
  }

  if (error || !member) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">Member Not Found</h3>
          <p className="text-slate-600 mb-6">{error || "The member you're looking for doesn't exist."}</p>
          <button 
            onClick={() => navigate('/members')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Members</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 font-sans">
      {/* Header Section */}
      <section className="relative py-16 bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => navigate('/members')}
            className="mb-6 inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Members</span>
          </button>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 font-medium mb-6 backdrop-blur-sm">
              <Shield className="w-4 h-4 mr-2" />
              Verified Member Profile
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {member.name}
            </h1>
            <p className="text-xl text-emerald-300 font-semibold mb-2">
              {member.specialization}
            </p>
            <p className="text-sm text-slate-200">
              Member ID: #{member.id}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - ID Card & Quick Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* ID Card Preview */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-emerald-600" />
                  Member ID Card
                </h3>
                <div className="flex justify-center">
                  <div className="transform scale-75 origin-top">
                    <MemberIDCard member={member} />
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Status</h3>
                <div className="flex justify-center">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getStatusColor(member.status)}`}>
                    {member.status || 'Active'}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Rating</h3>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {renderStars(member.rating || 0)}
                </div>
                <p className="text-center text-2xl font-bold text-slate-800">{member.rating || 0}/5</p>
              </div>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Contact Information */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Phone className="w-6 h-6 mr-3 text-emerald-600" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600 mb-1 block">Email Address</label>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-emerald-500" />
                        <a href={`mailto:${member.email}`} className="text-slate-800 hover:text-emerald-600 transition-colors">
                          {member.email}
                        </a>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-600 mb-1 block">Phone Number</label>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-5 h-5 text-emerald-500" />
                        <a href={`tel:${member.phone}`} className="text-slate-800 hover:text-emerald-600 transition-colors">
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600 mb-1 block">Location</label>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-emerald-500" />
                        <span className="text-slate-800">{member.location || 'Not specified'}</span>
                      </div>
                    </div>
                    {member.blood_group && (
                      <div>
                        <label className="text-sm font-semibold text-gray-600 mb-1 block">Blood Group</label>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-red-600">{member.blood_group}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-emerald-600" />
                  Professional Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600 mb-1">{member.years_experience || 0}</p>
                    <p className="text-sm text-blue-500 font-medium">Years Experience</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-purple-600 mb-1">{member.projects_completed || 0}</p>
                    <p className="text-sm text-purple-500 font-medium">Projects Completed</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600 mb-1">{member.rating || 0}</p>
                    <p className="text-sm text-green-500 font-medium">Rating</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 mb-1 block">Role</label>
                    <p className="text-lg font-semibold text-slate-800">{member.role || 'Survey Technician'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 mb-1 block">Specialization</label>
                    <p className="text-lg font-semibold text-slate-800">{member.specialization}</p>
                  </div>
                </div>
              </div>

              {/* License Information */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-emerald-600" />
                  License Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 mb-1 block">License Number</label>
                    <p className="font-mono text-xl font-bold text-slate-800">{member.license_number || 'Not assigned'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-600 mb-1 block">Valid Until</label>
                    <p className="text-xl font-bold text-red-600">
                      {formatDate(member.expiry_date || new Date(new Date().getFullYear() + 2, 11, 31))}
                    </p>
                  </div>
                  {member.rc_number && (
                    <div>
                      <label className="text-sm font-semibold text-gray-600 mb-1 block">RC Number</label>
                      <p className="text-xl font-bold text-slate-800">{member.rc_number}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${member.email}`}
                  className="flex-1 min-w-[200px] bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Email</span>
                </a>
                <a 
                  href={`tel:${member.phone}`}
                  className="flex-1 min-w-[200px] bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberDetailPage;