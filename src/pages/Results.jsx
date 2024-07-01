import React, { useState, useEffect } from 'react';

const Results = () => {
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showRambolito, setShowRambolito] = useState(false);

  useEffect(() => {
    setResults([
      { id: 1, bet: 'Bet 1', result: 'Win', date: '2024-06-30', time: '2:00 PM', rambolito: true },
      { id: 2, bet: 'Bet 2', result: 'Lose', date: '2024-06-29', time: '9:00 PM', rambolito: false },
    ]);
  }, []);

  const filteredResults = results.filter((result) =>
    result.bet.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!showRambolito || result.rambolito)
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Results</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by bet..."
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
              <th className="py-2 px-4 border-b">Bet</th>
              <th className="py-2 px-4 border-b">Result</th>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Rambolito</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((result) => (
              <tr key={result.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{result.id}</td>
                <td className="border px-4 py-2">{result.bet}</td>
                <td className="border px-4 py-2">{result.result}</td>
                <td className="border px-4 py-2">{result.date}</td>
                <td className="border px-4 py-2">{result.time}</td>
                <td className="border px-4 py-2 text-center">
                  {result.rambolito ? '✔️' : '❌'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
