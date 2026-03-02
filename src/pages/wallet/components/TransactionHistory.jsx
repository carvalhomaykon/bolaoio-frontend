export function TransactionHistory({ extrato = [] }) {
    return (
        <div className="lg:col-span-2 bg-card border border-gray-700 rounded-xl p-6">
            <h3 className="font-bold text-white mb-4">Extrato Financeiro</h3>
            
            <div className="overflow-x-auto"> {/* Adicionado para mobile não quebrar */}
                <table className="w-full text-left text-sm text-gray-400">
                    <thead className="text-xs uppercase bg-dark text-gray-300">
                        <tr>
                            <th className="px-4 py-3">Data</th>
                            <th className="px-4 py-3">Descrição</th>
                            <th className="px-4 py-3 text-right">Valor</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {extrato.length > 0 ? (
                            extrato.map((item, index) => {
                                // Lógica de Cores baseada na descrição
                                const isDeposito = item.descricao.toLowerCase().includes('deposito');
                                const isAposta = item.descricao.toLowerCase().includes('aposta');

                                return (
                                    <tr key={index} className="hover:bg-white/5 transition-colors">
                                        <td className="px-4 py-3">
                                            {new Date(item.data).toLocaleDateString('pt-BR')} 
                                            <span className="text-[10px] block text-gray-600">
                                                {new Date(item.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                                isDeposito ? 'text-green-400 bg-green-900/20 border-green-500/30' :
                                                isAposta ? 'text-red-400 bg-red-900/20 border-red-500/30' :
                                                'text-gray-400 bg-gray-800 border-gray-700'
                                            }`}>
                                                {item.descricao.toUpperCase()}
                                            </span>
                                        </td>
                                        <td className={`px-4 py-3 text-right font-bold ${
                                            isDeposito ? 'text-green-400' :
                                            isAposta ? 'text-red-400' : 'text-white'
                                        }`}>
                                            {isDeposito ? '+' : isAposta ? '-' : ''} R$ {Math.abs(item.valor).toFixed(2)}
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-4 py-10 text-center text-gray-600">
                                    Nenhuma movimentação encontrada.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}