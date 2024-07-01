import React, { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, users]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Users</h2>
      <input
        type="text"
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
