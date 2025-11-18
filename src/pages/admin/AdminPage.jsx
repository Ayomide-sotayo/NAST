import { useRef, useState, useEffect } from "react";
import {
  Users,
  MessageSquare,
  Plus,
  Edit3,
  Trash2,
  Eye,
  Shield,
  LogOut,
  Search,
  Mail,
  Save,
  X,
  Download,
  IdCard,
  Upload,
  Camera,
} from "lucide-react";
import { toPng } from "html-to-image";
import MemberIDCard from "../../components/MemberIDCard.jsx";
import { supabase } from "../../supabaseClient.js";

function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("members");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddMember, setShowAddMember] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [showIdCard, setShowIdCard] = useState(false);
  const [idCardMember, setIdCardMember] = useState(null);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const idCardRef = useRef(null);
  const fileInputRef = useRef(null);

  // New member form data
  // New member form data
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    role: "Member",
    specialization: "",
    avatar: "",
    status: "Active",
    license_number: "",
    cert_number: "",
    blood_group: "",
    years_experience: 0,
    rating: 0,
    projects_completed: 0,
  });

  // Fetch members from Supabase
  useEffect(() => {
    fetchMembers();
    fetchMessages();
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

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onLogout();
  };

  // Handle image selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB");
        return;
      }

      setImageFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload image to Supabase Storage
  const uploadImage = async (file, memberId) => {
    try {
      setUploading(true);

      const fileExt = file.name.split(".").pop();
      const fileName = `${memberId}_${Date.now()}.${fileExt}`;
      const filePath = `member-photos/${fileName}`;

      // Upload the file
      const { error: uploadError } = await supabase.storage
        .from("member-images")
        .upload(filePath, file);

      if (uploadError) {
        // If file already exists, try with a different name
        if (uploadError.message.includes("already exists")) {
          const newFileName = `${memberId}_${Date.now()}_${Math.random()
            .toString(36)
            .substring(2, 9)}.${fileExt}`;
          const newFilePath = `member-photos/${newFileName}`;

          const { error: retryError } = await supabase.storage
            .from("member-images")
            .upload(newFilePath, file);

          if (retryError) throw retryError;

          // Get public URL for the new file
          const {
            data: { publicUrl },
          } = supabase.storage.from("member-images").getPublicUrl(newFilePath);

          return publicUrl;
        }
        throw uploadError;
      }

      // Get public URL
      const {
        data: { publicUrl },
      } = supabase.storage.from("member-images").getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      // Return default avatar if upload fails
      return "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
    }
  };
  // Generate unique member ID
  const generateMemberId = () => {
    const existingIds = members.map((m) => m.id);
    let nextNum = members.length + 1;
    let newId = `NAST${nextNum.toString().padStart(3, "0")}`;

    // Ensure the ID is unique
    while (existingIds.includes(newId)) {
      nextNum++;
      newId = `NAST${nextNum.toString().padStart(3, "0")}`;
    }

    return newId;
  };

  // Generate license number
  const generateLicenseNumber = (location) => {
    const stateCode = location
      ? location.split(" ")[0].toUpperCase().slice(0, 3)
      : "GEN";
    const year = new Date().getFullYear();
    const nextNum = members.length + 1;
    return `SUR/${stateCode}/${year}/${nextNum.toString().padStart(3, "0")}`;
  };

  // Add new member to Supabase
  const handleAddMember = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      setError(null);

      const memberId = generateMemberId();
      let avatarUrl =
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";

      // Upload image if selected
      if (imageFile) {
        avatarUrl = await uploadImage(imageFile, memberId);
      }

      const memberData = {
        id: memberId,
        name: newMember.name.trim(),
        email: newMember.email.trim().toLowerCase(),
        phone: newMember.phone.trim(),
        location: newMember.location.trim(),
        role: newMember.role,
        specialization: newMember.specialization.trim(),
        avatar: avatarUrl,
        status: newMember.status,
        license_number: generateLicenseNumber(newMember.location),
        blood_group: newMember.blood_group,
        years_experience: parseInt(newMember.years_experience) || 0,
        rating: parseFloat(newMember.rating) || 0,
        projects_completed: parseInt(newMember.projects_completed) || 0,
        join_date: new Date().toISOString().split("T")[0],
        created_at: new Date().toISOString(),
      };

      console.log("Adding member:", memberData);

      const { data, error } = await supabase
        .from("members")
        .insert([memberData])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      setMembers([data[0], ...members]);
      resetForm();
      setShowAddMember(false);
      alert("Member added successfully!");
    } catch (error) {
      console.error("Error adding member:", error);
      setError("Error adding member: " + error.message);
      alert("Error adding member: " + error.message);
    } finally {
      setUploading(false);
    }
  };
  // Update member in Supabase
  const handleUpdateMember = async (e) => {
    e.preventDefault();
    try {
      setUploading(true);

      let avatarUrl = newMember.avatar;

      // Upload new image if selected
      if (imageFile) {
        avatarUrl = await uploadImage(imageFile, editingMember.id);
      }

      const updateData = {
        ...newMember,
        avatar: avatarUrl,
        years_experience: parseInt(newMember.years_experience) || 0,
        rating: parseFloat(newMember.rating) || 0,
        projects_completed: parseInt(newMember.projects_completed) || 0,
      };

      const { error } = await supabase
        .from("members")
        .update(updateData)
        .eq("id", editingMember.id);

      if (error) throw error;

      setMembers(
        members.map((m) =>
          m.id === editingMember.id ? { ...editingMember, ...updateData } : m
        )
      );
      resetForm();
      setEditingMember(null);
      setShowAddMember(false);
      alert("Member updated successfully!");
    } catch (error) {
      console.error("Error updating member:", error);
      alert("Error updating member: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setNewMember({
      name: "",
      email: "",
      phone: "",
      location: "",
      role: "Junior Surveyor",
      specialization: "",
      avatar: "",
      status: "Active",
      license_number: "",
      blood_group: "",
      years_experience: 0,
      rating: 0,
      projects_completed: 0,
    });
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Delete member from Supabase
  const handleDeleteMember = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    try {
      const { error } = await supabase.from("members").delete().eq("id", id);

      if (error) throw error;

      setMembers(members.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error deleting member:", error);
      alert("Error deleting member: " + error.message);
    }
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setNewMember(member);
    setImagePreview(member.avatar);
    setShowAddMember(true);
  };

  const generateIdCard = (member) => {
    setIdCardMember(member);
    setShowIdCard(true);
  };

  const downloadIdCard = () => {
    if (idCardRef.current === null) return;

    toPng(idCardRef.current, {
      cacheBust: true,
      backgroundColor: "#f8fafc",
      pixelRatio: 3,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${idCardMember.name.replace(/\s+/g, "_")}_NAST_ID.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Error generating ID card:", err);
        alert("Error generating ID card. Please try again.");
      });
  };

  const markMessageAsRead = async (id) => {
    try {
      const { error } = await supabase
        .from("contact_messages")
        .update({ status: "read" })
        .eq("id", id);

      if (error) throw error;

      setMessages(
        messages.map((msg) =>
          msg.id === id ? { ...msg, status: "read" } : msg
        )
      );
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;

    try {
      const { error } = await supabase
        .from("contact_messages")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Error deleting message: " + error.message);
    }
  };

  // Filter data
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-700">Loading dashboard...</p>
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
                <h1 className="text-xl font-bold text-slate-900">
                  NAST IFO Zone Admin
                </h1>
                <p className="text-sm text-slate-600">
                  Nigeria Association of Survey Technicians
                </p>
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
            <span>
              Messages ({messages.filter((m) => m.status === "unread").length})
            </span>
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === "members" && (
          <div className="space-y-6">
            {/* Members Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Members Management
                </h2>
                <p className="text-slate-600">
                  Add, edit, and manage NAST IFO ZONE members
                </p>
              </div>
              <button
                onClick={() => {
                  resetForm();
                  setShowAddMember(true);
                }}
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
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">
                        Member
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">
                        Contact
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">
                        Role
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">
                        Status
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-slate-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredMembers.map((member) => (
                      <tr
                        key={member.id}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <img
                              src={member.avatar}
                              alt={member.name}
                              className="w-10 h-10 rounded-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face";
                              }}
                            />
                            <div>
                              <p className="font-semibold text-slate-900">
                                {member.name}
                              </p>
                              <p className="text-sm text-slate-600">
                                ID: {member.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <p className="text-sm text-slate-900">
                              {member.email}
                            </p>
                            <p className="text-sm text-slate-600">
                              {member.phone}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-slate-900">
                              {member.role}
                            </p>
                            <p className="text-sm text-slate-600">
                              {member.specialization}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {member.status || "Active"}
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
                            <button
                              onClick={() => generateIdCard(member)}
                              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Generate ID Card"
                            >
                              <IdCard className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredMembers.length === 0 && (
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No members found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Contact Messages
                </h2>
                <p className="text-slate-600">
                  View and manage contact form submissions
                </p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-emerald-600">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>
                  {messages.filter((m) => m.status === "unread").length} unread
                  messages
                </span>
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
                    message.status === "unread"
                      ? "border-emerald-200 bg-emerald-50/30"
                      : "border-slate-200"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-slate-900">
                            {message.name}
                          </h3>
                          {message.status === "unread" && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                              New
                            </span>
                          )}
                          {message.status === "replied" && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Replied
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mb-1">
                          {message.email}
                        </p>
                        <p className="text-sm text-slate-500">
                          {new Date(
                            message.created_at || message.date
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {message.status === "unread" && (
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
                      <h4 className="font-medium text-slate-900">
                        {message.subject}
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {message.message}
                      </p>
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

              {filteredMessages.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">No messages found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Add/Edit Member Modal */}
        {showAddMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    {editingMember ? "Edit Member" : "Add New Member"}
                  </h3>
                  <button
                    onClick={() => {
                      setShowAddMember(false);
                      setEditingMember(null);
                      resetForm();
                    }}
                    className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <form
                onSubmit={editingMember ? handleUpdateMember : handleAddMember}
                className="p-6 space-y-6"
              >
                {/* Image Upload Section */}
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-24 h-24 rounded-full object-cover border-4 border-emerald-500"
                        />
                      ) : (
                        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                          <Camera className="w-8 h-8 text-slate-400" />
                        </div>
                      )}
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageSelect}
                      className="hidden"
                    />

                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-lg transition-colors"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Choose Profile Photo</span>
                    </button>

                    <p className="text-sm text-slate-500 mt-2">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={newMember.name}
                      onChange={(e) =>
                        setNewMember({ ...newMember, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={newMember.email}
                      onChange={(e) =>
                        setNewMember({ ...newMember, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={newMember.phone}
                      onChange={(e) =>
                        setNewMember({ ...newMember, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Location/State *
                    </label>
                    <input
                      type="text"
                      value={newMember.location}
                      onChange={(e) =>
                        setNewMember({ ...newMember, location: e.target.value })
                      }
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
                      onChange={(e) =>
                        setNewMember({ ...newMember, role: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="Member">Member</option>
                      <option value="Elder">Elder</option>
                      <option value="Semi Elder">Semi Elder</option>
                      <option value="Chairman">Chairman</option>
                      <option value="Vice Chairman 1">
                        Vice Chairman 1
                      </option>
                      <option value="Vice Chairman 2">
                        Vice Chairman 2
                      </option>
                      <option value="P.R.O 1">P.R.O 1</option>
                      <option value="P.R.O 2">P.R.O 2</option>
                      <option value="Treasurer">Treasurer</option>
                      <option value="Secetary"> Secetary</option>
                      <option value="Asst. Secetary">Asst.Secetary</option>
                      <option value="Financial Secetary">Financial Secetary</option>
                      <option value="Social Secetary"> Social Secetary</option>
                      <option value="Auditor 1">Auditor 1</option>
                      <option value="Auditor 2">Auditor 2</option>
                      <option value="Chief Whip 1">Chief Whip 1</option>
                      <option value="Chief Whip 2">Chief Whip 2</option>
                      <option value="ANAST"> ANAST</option>
                      <option value="MNAST"> MNAST</option>
                      <option value="FNAST"> FNAST</option>
                      <option value="X Officio"> X Officio</option>
                      <option value="Patron"> Patron</option>
                      <option value="Grand Patron">Grand Patron</option>
                      <option value="Advicer">Advicer</option>
                      <option value="Chief Advicer">Chief Advicer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Specialization *
                    </label>
                    <input
                      type="text"
                      value={newMember.specialization}
                      onChange={(e) =>
                        setNewMember({
                          ...newMember,
                          specialization: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="e.g., Land Surveying, GIS, etc."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                     Active Status
                    </label>
                    <select
                      value={newMember.status}
                      onChange={(e) =>
                        setNewMember({ ...newMember, status: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="Active">Active</option>
                      <option value="Training">Training</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Under Suspension">Under Suspension</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Blood Group
                    </label>
                    <select
                      value={newMember.blood_group}
                      onChange={(e) =>
                        setNewMember({
                          ...newMember,
                          blood_group: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      value={newMember.years_experience}
                      onChange={(e) =>
                        setNewMember({
                          ...newMember,
                          years_experience: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Rating (0-5)
                    </label>
                    <input
                      type="number"
                      value={newMember.rating}
                      onChange={(e) =>
                        setNewMember({
                          ...newMember,
                          rating: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      min="0"
                      max="5"
                      step="0.1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Projects Completed
                    </label>
                    <input
                      type="number"
                      value={newMember.projects_completed}
                      onChange={(e) =>
                        setNewMember({
                          ...newMember,
                          projects_completed: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Cert Number
                    </label>
                    <input
                      type="number"
                      value={newMember.cert_number}
                      onChange={(e) =>
                        setNewMember({
                          ...newMember,
                          projects_completed: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      min="0"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddMember(false);
                      setEditingMember(null);
                      resetForm();
                    }}
                    className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors duration-200"
                    disabled={uploading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {uploading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        <span>
                          {editingMember ? "Update Member" : "Add Member"}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ID Card Modal */}
        {showIdCard && (
          <div className="absolute inset-0 flex items-center justify-center z-50 ">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900">
                    Member ID Card
                  </h3>
                  <button
                    onClick={() => setShowIdCard(false)}
                    className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col items-center">
                <div ref={idCardRef}>
                  <MemberIDCard member={idCardMember} />
                </div>

                <div className="mt-8 flex space-x-4">
                  <button
                    onClick={() => setShowIdCard(false)}
                    className="px-6 py-3 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={downloadIdCard}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download ID Card</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
