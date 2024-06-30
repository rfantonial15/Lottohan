import React, { useState, useEffect } from 'react';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults([
      { id: 1, bet: 'Bet 1', result: 'Win', date: '2024-06-30' },
      { id: 2, bet: 'Bet 2', result: 'Lose', date: '2024-06-29' },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Results</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Bet</th>
              <th className="py-2 px-4 border-b">Result</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result) => (
              <tr key={result.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{result.id}</td>
                <td className="border px-4 py-2">{result.bet}</td>
                <td className="border px-4 py-2">{result.result}</td>
                <td className="border px-4 py-2">{result.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
