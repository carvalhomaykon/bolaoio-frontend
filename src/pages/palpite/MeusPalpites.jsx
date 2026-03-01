import { useEffect, useState } from "react";
import { palpiteService } from "../../services/palpiteService";

export function MeusPalpites() {
    const [palpites, setPalpites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPalpites = async () => {
            try {
                const data = await palpiteService.getPalpiteByUser();
                setPalpites(Array.isArray(data) ? data : [data]);
            } catch (error) {
                console.error("Erro ao buscar palpites:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPalpites();
    }, []); // Array vazio para executar apenas ao montar o componente

    if (loading) {
        return <div className="p-10 text-white text-center">Carregando palpites...</div>;
    }

    return (
        <div id="view-my-bets" className="fade-in">
            {/* Resumo de Estatísticas (Valores estáticos ou calculados do array) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 border border-emerald-700/50 p-6 rounded-xl">
                    <p className="text-emerald-300 text-sm font-medium mb-1">Lucro Potencial</p>
                    <h3 className="text-3xl font-bold text-white">R$ 3.450,00</h3>
                </div>
                <div className="bg-card border border-gray-700 p-6 rounded-xl">
                    <p className="text-gray-400 text-sm font-medium mb-1">Investido</p>
                    <h3 className="text-2xl font-bold text-white">R$ 180,00</h3>
                </div>
                <div className="bg-card border border-gray-700 p-6 rounded-xl">
                    <p className="text-gray-400 text-sm font-medium mb-1">Taxa de Acerto</p>
                    <h3 className="text-2xl font-bold text-accent">68%</h3>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
                <div>
                    <h2 className="text-xl font-bold text-white">Meus Palpites</h2>
                    <p className="text-gray-400 text-sm">Gerencie suas apostas nos campeonatos.</p>
                </div>
            </div>

            <div className="space-y-4 pb-10">
                {palpites.length > 0 ? (
                    palpites.map((item, index) => (
                        <div key={index} className="bg-card border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition">
                            <div className="p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center">
                                
                                {/* Status e Info Lateral */}
                                <div className="flex flex-row md:flex-col items-center md:items-start gap-3 md:w-24 shrink-0 text-gray-400 border-b md:border-b-0 md:border-r border-gray-700 pb-3 md:pb-0 md:pr-4 w-full md:w-auto">
                                    <div className="text-center md:text-left">
                                        <span className={`block text-xs uppercase font-bold ${item.statusJogo === 'Em Jogo' ? 'text-red-500 animate-pulse' : 'text-blue-400'}`}>
                                            {item.statusJogo}
                                        </span>
                                        <span className="block text-lg font-bold text-white">{item.nomeBolao}</span>
                                    </div>
                                </div>

                                {/* Conteúdo Central */}
                                <div className="flex-1 w-full">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-bold text-white">{item.descricaoJogo}</h4>
                                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded font-bold">
                                            {item.statusJogo === 'Agendada' ? 'Pré-jogo' : item.statusJogo}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-3">
                                        Vencedor Escolhido: <span className="text-gray-300">{item.timeVencedor}</span>
                                    </p>
                                    
                                    <div className="flex items-center gap-4 text-sm bg-black/20 p-3 rounded-lg border border-gray-700/50">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-500">Seu Placar:</span>
                                            <span className="font-mono font-bold text-accent">{item.placarPalpite}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Valores e Ação */}
                                <div className="flex flex-row md:flex-col items-center justify-between w-full md:w-48 gap-4 border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-6">
                                    <div className="text-right w-full">
                                        <p className="text-xs text-gray-500">Retorno Potencial</p>
                                        <p className="text-xl font-bold text-green-400">{item.retornoPotencial}</p>
                                        <p className="text-xs text-gray-600">Aposta: {item.valorApostado}</p>
                                    </div>
                                    <button 
                                        className={`w-full py-2 rounded-lg text-sm font-bold transition ${item.statusJogo === 'Agendada' ? 'bg-gray-700 cursor-not-allowed opacity-50' : 'bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50'}`}
                                        disabled={item.statusJogo === 'Agendada'}
                                    >
                                        {item.statusJogo === 'Agendada' ? 'Aguardando' : 'Ver Detalhes'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">Nenhum palpite encontrado.</p>
                )}
            </div>
        </div>
    );
}