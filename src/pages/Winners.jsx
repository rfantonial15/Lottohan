import React, { useState, useEffect } from 'react';

const Winners = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    setWinners([
      { id: 1, user: 'John Doe', prize: 1000, date: '2024-06-30' },
      { id: 2, user: 'Jane Smith', prize: 500, date: '2024-06-29' },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Winners</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Prize</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {winners.map((winner) => (
              <tr key={winner.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{winner.id}</td>
                <td className="border px-4 py-2">{winner.user}</td>
                <td className="border px-4 py-2">{winner.prize}</td>
                <td className="border px-4 py-2">{winner.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Winners;
