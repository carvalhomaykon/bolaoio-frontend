export function FeaturedGames({ games = [] }) {
    const latestGames = games.slice(0, 3);

    if (latestGames.length === 0) {
        return <p className="text-gray-500 text-center my-10">Nenhuma partida em destaque no momento.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {latestGames.map((game) => (
                <div key={game.id} className="bg-card rounded-xl border border-gray-700 overflow-hidden hover:border-primary transition group relative">
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        DESTAQUE
                    </div>

                    <div className="p-5">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                <i className="fa-regular fa-calendar"></i> 
                                {new Date(game.data).toLocaleDateString('pt-BR')}
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                            {/* Time A */}
                            <div className="text-center flex-1">
                                <img 
                                    src={game.flagA} 
                                    alt={game.timeA} 
                                    className="w-12 h-12 mx-auto object-contain mb-2"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/48?text=?'} 
                                />
                                <p className="font-bold text-white text-sm truncate">{game.timeA}</p>
                            </div>

                            {/* Versus / Hora */}
                            <div className="px-4 text-center">
                                <div className="bg-dark px-3 py-1 rounded border border-gray-700 mb-1">
                                    <span className="font-mono font-bold text-xl text-accent">VS</span>
                                </div>
                                <span className="text-[10px] text-gray-500 font-bold">
                                    {new Date(game.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>

                            {/* Time B */}
                            <div className="text-center flex-1">
                                <img 
                                    src={game.flagB} 
                                    alt={game.timeB} 
                                    className="w-12 h-12 mx-auto object-contain mb-2"
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/48?text=?'}
                                />
                                <p className="font-bold text-white text-sm truncate">{game.timeB}</p>
                            </div>
                        </div>

                        <div className="flex justify-between text-sm mb-4 border-t border-gray-700 pt-3">
                            <div>
                                <p className="text-gray-500 text-xs">Taxa de Entrada</p>
                                <p className="font-bold text-white">R$ 10,00</p>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 text-xs">Prêmio Estimado</p>
                                <p className="font-bold text-green-400">R$ 2.500,00</p>
                            </div>
                        </div>

                        <button className="w-full bg-primary hover:bg-green-700 text-white py-2 rounded font-medium transition group-hover:scale-[1.02]">
                            Criar Palpite
                        </button>
                    </div>

                    <div className="bg-gray-700/50 px-5 py-2 text-[10px] text-gray-400 flex justify-between">
                        <span className="flex items-center gap-1">
                            <i className="fa-solid fa-users"></i> +1.2k participando
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}