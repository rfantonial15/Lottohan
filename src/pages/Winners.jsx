import React, { useState, useEffect } from 'react';

const Winners = () => {
  const [winners, setWinners] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showRambolito, setShowRambolito] = useState(false);

  useEffect(() => {
    setWinners([
      { id: 1, user: 'John Doe', prize: 1000, date: '2024-06-30', time: '2:00 PM', rambolito: true },
      { id: 2, user: 'Jane Smith', prize: 500, date: '2024-06-29', time: '9:00 PM', rambolito: false },
    ]);
  }, []);

  const filteredWinners = winners.filter((winner) =>
    winner.user.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!showRambolito || winner.rambolito)
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Winners</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by user..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 mr-2"
        />
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={showRambolito}
            onChange={(e) => setShowRambolito(e.target.checked)}
            className="mr-2"
          />
          Show Rambolito Only
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Prize</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Rambolito</th>
            </tr>
          </thead>
          <tbody>
            {filteredWinners.map((winner) => (
              <tr key={winner.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{winner.id}</td>
                <td className="border px-4 py-2">{winner.user}</td>
                <td className="border px-4 py-2">{winner.prize}</td>
                <td className="border px-4 py-2">{winner.date}</td>
                <td className="border px-4 py-2">{winner.time}</td>
                <td className="border px-4 py-2 text-center">
                  {winner.rambolito ? '✔️' : '❌'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Winners;
