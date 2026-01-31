// src/components/CardJogo.jsx
import React, { useState } from 'react';

const CardJogo = ({ jogo, aoSalvar }) => {
  const [placar1, setPlacar1] = useState(jogo.p1);
  const [placar2, setPlacar2] = useState(jogo.p2);

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="text-center text-xs font-bold text-gray-400 mb-2">{jogo.data} - {jogo.grupo}</div>
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center w-20">
          <span className="text-2xl">{jogo.b1}</span>
          <span className="text-sm font-medium">{jogo.s1}</span>
        </div>
        
        <div className="flex gap-2">
          <input 
            type="number" 
            className="w-10 h-10 border rounded text-center font-bold"
            value={placar1}
            onChange={(e) => setPlacar1(e.target.value)}
          />
          <span className="text-gray-300 self-center">x</span>
          <input 
            type="number" 
            className="w-10 h-10 border rounded text-center font-bold"
            value={placar2}
            onChange={(e) => setPlacar2(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center w-20">
          <span className="text-2xl">{jogo.b2}</span>
          <span className="text-sm font-medium">{jogo.s2}</span>
        </div>
      </div>
      <button 
        onClick={() => aoSalvar(jogo.id, placar1, placar2)}
        className="w-full mt-4 py-1 text-xs bg-green-100 text-green-700 font-bold rounded hover:bg-green-200"
      >
        Confirmar Palpite
      </button>
    </div>
  );
};

export default CardJogo;