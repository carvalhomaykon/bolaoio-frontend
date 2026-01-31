// src/components/TabelaRanking.jsx
import React from 'react';

const TabelaRanking = ({ dados }) => (
  <div className="w-full max-w-md bg-white rounded-lg shadow overflow-hidden">
    <div className="bg-primary text-white p-3 font-bold text-center">Ranking Geral</div>
    {dados.map((user, index) => (
      <div key={index} className="flex justify-between p-3 border-b last:border-0 items-center">
        <span className="text-gray-600 font-bold">#{index + 1} {user.nome}</span>
        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">
          {user.pontos} pts
        </span>
      </div>
    ))}
  </div>
);

export default TabelaRanking;