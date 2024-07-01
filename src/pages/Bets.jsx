import React, { useState, useEffect } from 'react';

const Bets = () => {
  const [bets, setBets] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredBets, setFilteredBets] = useState([]);

  useEffect(() => {
    setBets([
      { id: 1, user: 'John Doe', amount: 100, date: '2024-06-30' },
      { id: 2, user: 'Jane Smith', amount: 50, date: '2024-06-29' },
    ]);
  }, []);

  useEffect(() => {
    setFilteredBets(
      bets.filter(bet =>
        bet.user.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, bets]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Bets</h2>
      <input
        type="text"
        placeholder="Filter by user"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">User</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredBets.map((bet) => (
              <tr key={bet.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{bet.id}</td>
                <td className="border px-4 py-2">{bet.user}</td>
                <td className="border px-4 py-2">{bet.amount}</td>
                <td className="border px-4 py-2">{bet.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bets;
