import { useState } from 'react';

function MembersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');

  // Sample member data (replace with real data later)
  const members = [
    { name: 'John Adebayo', id: 'SURV001', role: 'Senior Surveyor', joinDate: '2020-01-15' },
    { name: 'Amaka Okeke', id: 'SURV002', role: 'Junior Surveyor', joinDate: '2022-06-10' },
    { name: 'Tunde Bello', id: 'SURV003', role: 'Senior Surveyor', joinDate: '2019-03-22' },
    { name: 'Chika Eze', id: 'SURV004', role: 'Trainee', joinDate: '2023-09-05' },
  ];

  // Filter members based on search term and role
  const filteredMembers = members.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'All' || member.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-poppins py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-green-800 text-center mb-8">Our Members</h1>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="w-full md:w-1/4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            <option value="All">All Roles</option>
            <option value="Senior Surveyor">Senior Surveyor</option>
            <option value="Junior Surveyor">Junior Surveyor</option>
            <option value="Trainee">Trainee</option>
          </select>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div key={member.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-green-800">{member.name}</h3>
              <p className="text-sm text-gray-600">ID: {member.id}</p>
              <p className="text-sm text-gray-600">Role: {member.role}</p>
              <p className="text-sm text-gray-600">Joined: {member.joinDate}</p>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No members found.</p>
        )}
      </div>
    </div>
  );
}

export default MembersPage;