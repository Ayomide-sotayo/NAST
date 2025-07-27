import { useState, useEffect } from "react";
import { 
  Users, 
  MessageSquare, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  EyeOff, 
  Shield, 
  LogOut,
  Search,
  Mail,
  Save,
  X
} from "lucide-react";

function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("members");
  const [searchTerm, setSearchTerm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [showAddMember, setShowAddMember] = useState(false);
  const [editingMember, setEditingMember] = useState(null);

  // Login form data
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    role: "Junior Surveyor",
    specialization: "",
    avatar: ""
  });

  // Sample members data (in real app, this would come from a database)
  const [members, setMembers] = useState([
    {
      id: "NAST001",
      name: "John Adebayo",
      email: "john.adebayo@nastnigeria.org",
      phone: "+234 801 234 5678",
      location: "Lagos State",
      role: "Senior Surveyor",
      specialization: "Land Surveying",
      status: "Active",
      joinDate: "2020-01-15",
      licenseNumber: "SUR/LAG/2020/001",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: "NAST002",
      name: "Amaka Okeke",
      email: "amaka.okeke@nastnigeria.org",
      phone: "+234 802 345 6789",
      location: "Abuja FCT",
      role: "Junior Surveyor",
      specialization: "Cadastral Surveying",
      status: "Active",
      joinDate: "2022-06-10",
      licenseNumber: "SUR/FCT/2022/002",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?w=150&h=150&fit=crop&crop=face"
    }
  ]);

  // Sample contact messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "David Okafor",
      email: "david.okafor@gmail.com",
      subject: "Membership Application Inquiry",
      message: "I would like to know the requirements for becoming a member of NAST. I have 5 years of surveying experience.",
      date: "2024-01-15T10:30:00Z",
      status: "unread"
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      email: "sarah.ahmed@company.com",
      subject: "Certification Verification",
      message: "I need to verify the certification of one of your members for a project we're working on.",
      date: "2024-01-14T14:20:00Z",
      status: "read"
    },
    {
      id: 3,
      name: "Michael Eze",
      email: "m.eze@survey.ng",
      subject: "Training Workshop Request",
      message: "Can you provide information about upcoming GIS training workshops?",
      date: "2024-01-13T09:15:00Z",
      status: "replied"
    }
  ]);

  // Authentication
  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication (in real app, use proper authentication)
    if (loginData.username === "admin" && loginData.password === "nast2024") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials. Use username: admin, password: nast2024");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginData({ username: "", password: "" });
  };

  // Member management
  const generateMemberId = () => {
    const nextNum = members.length + 1;
    return `NAST${nextNum.toString().padStart(3, '0')}`;
  };

  const generateLicenseNumber = (location) => {
    const stateCode = location.split(' ')[0].toUpperCase().slice(0, 3);
    const year = new Date().getFullYear();
    const nextNum = members.length + 1;
    return `SUR/${stateCode}/${year}/${nextNum.toString().padStart(3, '0')}`;
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    const member = {
      ...newMember,
      id: generateMemberId(),
      licenseNumber: generateLicenseNumber(newMember.location),
      status: "Active",
      joinDate: new Date().toISOString().split('T')[0],
      avatar: newMember.avatar || `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face`
    };
    
    setMembers([...members, member]);
    setNewMember({
      name: "",
      email: "",
      phone: "",
      location: "",
      role: "Junior Surveyor",
      specialization: "",
      avatar: ""
    });
    setShowAddMember(false);
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setNewMember(member);
    setShowAddMember(true);
  };

  const handleUpdateMember = (e) => {
    e.preventDefault();
    setMembers(members.map(m => m.id === editingMember.id ? { ...newMember } : m));
    setEditingMember(null);
    setNewMember({
      name: "",
      email: "",
      phone: "",
      location: "",
      role: "Junior Surveyor",
      specialization: "",
      avatar: ""
    });
    setShowAddMember(false);
  };

  const handleDeleteMember = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const markMessageAsRead = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, status: "read" } : msg
    ));
  };

  const deleteMessage = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      setMessages(messages.filter(msg => msg.id !== id));
    }
  };

  // Filter data
  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMessages = messages.filter(msg =>
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">NAST Admin</h1>
              <p className="text-slate-600 mt-2">Sign in to access the dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="Enter username"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-12"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[0.98]"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <p className="text-sm text-emerald-700">
                <strong>Demo Credentials:</strong><br />
                Username: admin<br />
                Password: nast2024
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">NAST Admin Dashboard</h1>
                <p className="text-sm text-slate-600">Nigeria Association of Surveyors & Topographers</p>
              </div>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-slate-100 p-1 rounded-xl w-fit">
          <button
            onClick={() => setActiveTab("members")}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              activeTab === "members"
                ? "bg-white text-emerald-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Members ({members.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              activeTab === "messages"
                ? "bg-white text-emerald-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Messages ({messages.filter(m => m.status === 'unread').length})</span>
          </button>
        </div>

        {/* Members Tab */}
        {activeTab === "members" && (
          <div className="space-y-6">
            {/* Members Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Members Management</h2>
                <p className="text-slate-600">Add, edit, and manage NAST members</p>
              </div>
              <button
                onClick={() => setShowAddMember(true)}
                className="flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Member</span>
              </button>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Members List */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Member</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Contact</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Role</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Status</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-semibold text-slate-900">{member.name}</p>
                              <p className="text-sm text-slate-600">ID: {member.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <p className="text-sm text-slate-900">{member.email}</p>
                            <p className="text-sm text-slate-600">{member.phone}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-slate-900">{member.role}</p>
                            <p className="text-sm text-slate-600">{member.specialization}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {member.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => handleEditMember(member)}
                              className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                              title="Edit member"
                            >
                              <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteMember(member.id)}
                              className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete member"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Contact Messages</h2>
                <p className="text-slate-600">View and manage contact form submissions</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-emerald-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>{messages.filter(m => m.status === 'unread').length} unread messages</span>
              </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search messages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Messages List */}
            <div className="space-y-4">
              {filteredMessages.map((message) => (
                <div
                  key={message.id}
                  className={`bg-white rounded-2xl shadow-sm border transition-all duration-200 hover:shadow-md ${
                    message.status === 'unread' 
                      ? 'border-emerald-200 bg-emerald-50/30' 
                      : 'border-slate-200'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-slate-900">{message.name}</h3>
                          {message.status === 'unread' && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                              New
                            </span>
                          )}
                          {message.status === 'replied' && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Replied
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mb-1">{message.email}</p>
                        <p className="text-sm text-slate-500">
                          {new Date(message.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {message.status === 'unread' && (
                          <button
                            onClick={() => markMessageAsRead(message.id)}
                            className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                            title="Mark as read"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteMessage(message.id)}
                          className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete message"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-slate-900">{message.subject}</h4>
                      <p className="text-slate-700 leading-relaxed">{message.message}</p>
                    </div>

                    <div className="mt-4 flex items-center space-x-3">
                      <a
                        href={`mailto:${message.email}?subject=Re: ${message.subject}`}
                        className="inline-flex items-center space-x-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Reply</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add/Edit Member Modal */}
        {showAddMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    {editingMember ? "Edit Member" : "Add New Member"}
                  </h3>
                  <button
                    onClick={() => {
                      setShowAddMember(false);
                      setEditingMember(null);
                      setNewMember({
                        name: "", email: "", phone: "", location: "",
                        role: "Junior Surveyor", specialization: "", avatar: ""
                      });
                    }}
                    className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <form onSubmit={editingMember ? handleUpdateMember : handleAddMember} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={newMember.name}
                      onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={newMember.email}
                      onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={newMember.phone}
                      onChange={(e) => setNewMember({...newMember, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Location/State
                    </label>
                    <input
                      type="text"
                      value={newMember.location}
                      onChange={(e) => setNewMember({...newMember, location: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Professional Role
                    </label>
                    <select
                      value={newMember.role}
                      onChange={(e) => setNewMember({...newMember, role: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="Junior Surveyor">Junior Surveyor</option>
                      <option value="Senior Surveyor">Senior Surveyor</option>
                      <option value="Survey Tech">Survey Tech</option>
                      <option value="Principal Surveyor">Principal Surveyor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Specialization
                    </label>
                    <input
                      type="text"
                      value={newMember.specialization}
                      onChange={(e) => setNewMember({...newMember, specialization: e.target.value})}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., Land Surveying, GIS, etc."
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Profile Photo URL (Optional)
                  </label>
                  <input
                    type="url"
                    value={newMember.avatar}
                    onChange={(e) => setNewMember({...newMember, avatar: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="https://example.com/photo.jpg"
                  />
                </div>

                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddMember(false);
                      setEditingMember(null);
                      setNewMember({
                        name: "", email: "", phone: "", location: "",
                        role: "Junior Surveyor", specialization: "", avatar: ""
                      });
                    }}
                    className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl transition-all duration-300"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingMember ? "Update Member" : "Add Member"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;