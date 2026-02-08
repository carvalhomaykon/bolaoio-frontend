export function FeaturedGames() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-card rounded-xl border border-gray-700 overflow-hidden hover:border-primary transition group relative">
                <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">AO VIVO</div>
                <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <i className="fa-regular fa-futbol"></i> Grupo G - Rodada 2
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-center">
                            <span className="text-4xl">🇧🇷</span>
                            <p className="font-bold text-white mt-1">Brasil</p>
                        </div>
                        <div className="bg-dark px-4 py-2 rounded-lg border border-gray-700">
                            <span className="font-mono font-bold text-2xl text-accent">1 - 0</span>
                        </div>
                        <div className="text-center">
                            <span className="text-4xl">🇨🇭</span>
                            <p className="font-bold text-white mt-1">Suíça</p>
                        </div>
                    </div>

                    <div className="flex justify-between text-sm mb-4 border-t border-gray-700 pt-3">
                        <div>
                            <p className="text-gray-500 text-xs">Entrada</p>
                            <p className="font-bold text-white">R$ 50,00</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs">Prêmio Acumulado</p>
                            <p className="font-bold text-green-400">R$ 15.000,00</p>
                        </div>
                    </div>
                    <button className="w-full bg-primary hover:bg-green-700 text-white py-2 rounded font-medium transition">Apostar Agora</button>
                </div>
                <div className="bg-gray-700/50 px-5 py-2 text-xs text-gray-400 flex justify-between">
                    <span>Org: FIFA Oficial</span>
                    <span>Participantes: 3.4k</span>
                </div>
            </div>

            <div className="bg-card rounded-xl border border-gray-700 overflow-hidden hover:border-blue-500 transition group">
                <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2 text-sm text-blue-400">
                            <i className="fa-solid fa-calendar-day"></i> Grupo D - Clássico
                        </div>
                        <div className="text-xs flex items-center gap-1 text-accent">
                            <i className="fa-solid fa-fire"></i> Hot
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-4 px-2">
                        <div className="text-center">
                            <span className="text-4xl">🇫🇷</span>
                            <p className="font-bold text-white mt-1">França</p>
                        </div>
                        <div className="text-center">
                            <span className="text-xs text-gray-500 font-bold uppercase">VS</span>
                            <p className="text-sm text-gray-300 mt-1">16:00</p>
                        </div>
                        <div className="text-center">
                            <span className="text-4xl">🇩🇰</span>
                            <p className="font-bold text-white mt-1">Dinamarca</p>
                        </div>
                    </div>
                    
                    <div className="flex justify-between text-sm mb-4 border-t border-gray-700 pt-3">
                        <div>
                            <p className="text-gray-500 text-xs">Entrada</p>
                            <p className="font-bold text-white">R$ 25,00</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs">Prêmio Est.</p>
                            <p className="font-bold text-green-400">R$ 4.200,00</p>
                        </div>
                    </div>
                    <button className="w-full bg-gray-700 hover:bg-gray-600 border border-gray-500 text-white py-2 rounded font-medium transition">Entrar no Bolão</button>
                </div>
                <div className="bg-gray-700/50 px-5 py-2 text-xs text-gray-400 flex justify-between">
                    <span>Org: Comunidade BR</span>
                    <span>Inicia em: 4h 30m</span>
                </div>
            </div>

            <div className="bg-card rounded-xl border border-accent/30 overflow-hidden hover:border-accent transition group">
                <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-2 text-sm text-accent">
                            <i className="fa-solid fa-trophy"></i> Longo Prazo
                        </div>
                        <div className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded border border-accent/20">Especial</div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 text-center">Quem levanta a taça?</h3>
                    <p className="text-gray-400 text-sm mb-4 text-center">Aposte no campeão da Copa 2026.</p>
                    
                    <div className="flex justify-center gap-4 mb-4">
                        <span className="text-2xl" title="Brasil">🇧🇷</span>
                        <span className="text-2xl" title="França">🇫🇷</span>
                        <span className="text-2xl" title="Argentina">🇦🇷</span>
                        <span className="text-2xl" title="Alemanha">🇩🇪</span>
                    </div>
                    
                    <div className="flex justify-between text-sm mb-4 border-t border-gray-700 pt-3">
                        <div>
                            <p className="text-gray-500 text-xs">Entrada</p>
                            <p className="font-bold text-white">R$ 100,00</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs">Jackpot</p>
                            <p className="font-bold text-accent">R$ 500k+</p>
                        </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black py-2 rounded font-bold transition">Palpitar no Campeão</button>
                </div>
                <div className="bg-gray-700/50 px-5 py-2 text-xs text-gray-400 flex justify-between">
                    <span>Org: Bolao.io Oficial</span>
                    <span>Encerra em 10 dias</span>
                </div>
            </div>
        </div>
    )
}