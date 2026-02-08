export function OpenBoloes() {
    return (
        <>
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white">Bolões Abertos</h2>
                    <p className="text-gray-400 text-sm">Bolões privados e públicas disponíveis.</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 pb-10">         
                <div className="bg-card border border-gray-700 rounded-xl p-4 hover:border-primary transition group relative flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full md:w-1/4">
                        <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 shrink-0">
                            <span className="text-2xl">🇦🇷</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-white group-hover:text-primary transition">Argentina vs México</h4>
                            <span className="text-xs text-gray-400">Grupo C • Decisivo</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Preenchimento</span>
                            <span className="text-white">85/100 vagas</span>
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-full rounded-full" style={{width: '85%'}}></div>
                        </div>
                    </div>
                    <div className="flex justify-between md:block w-full md:w-auto text-right md:text-center min-w-[120px]">
                        <div>
                            <p className="text-xs text-gray-400">Entrada</p>
                            <p className="font-bold text-white">R$ 20,00</p>
                        </div>
                        <div className="md:mt-1">
                            <p className="text-xs text-gray-400">Prêmio</p>
                            <p className="font-bold text-green-400">R$ 1.800,00</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto gap-4">
                        <div className="text-right">
                            <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium"><i className="fa-regular fa-clock"></i> Amanhã</div>
                        </div>
                        <button className="bg-gray-700 hover:bg-primary text-white px-6 py-2 rounded-lg font-medium transition whitespace-nowrap">Entrar</button>
                    </div>
                </div>

                <div className="bg-card border border-gray-700 rounded-xl p-4 hover:border-red-500 transition group relative flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full md:w-1/4">
                        <div className="w-12 h-12 rounded-full bg-red-900/50 flex items-center justify-center text-red-400 shrink-0">
                            <span className="text-2xl">🇪🇸</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-white group-hover:text-red-400 transition">Espanha vs Alemanha</h4>
                            <span className="text-xs text-gray-400">Grupo E • O Jogo do Grupo</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Preenchimento</span>
                            <span className="text-white">400/500 vagas</span>
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full rounded-full" style={{width: '80%'}}></div>
                        </div>
                    </div>
                    <div className="flex justify-between md:block w-full md:w-auto text-right md:text-center min-w-[120px]">
                        <div>
                            <p className="text-xs text-gray-400">Entrada</p>
                            <p className="font-bold text-white">R$ 50,00</p>
                        </div>
                        <div className="md:mt-1">
                            <p className="text-xs text-gray-400">Prêmio</p>
                            <p className="font-bold text-green-400">R$ 20.000,00</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto gap-4">
                        <div className="text-right">
                            <div className="flex items-center gap-1 text-gray-300 text-sm font-medium"><i className="fa-regular fa-clock"></i> 2 dias</div>
                        </div>
                        <button className="bg-gray-700 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition whitespace-nowrap">Entrar</button>
                    </div>
                </div>

                <div className="bg-card border border-gray-700 rounded-xl p-4 hover:border-accent transition group relative flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full md:w-1/4">
                        <div className="w-12 h-12 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-500 shrink-0 border border-yellow-700">
                            <i className="fa-solid fa-boot-kick text-xl"></i> </div>
                        <div>
                            <h4 className="font-bold text-white group-hover:text-accent transition">Artilheiro da Copa</h4>
                            <span className="text-xs text-gray-400">Especiais • Jogadores</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Participantes</span>
                            <span className="text-white">12.4k</span>
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-accent h-full rounded-full" style={{width: '45%'}}></div>
                        </div>
                    </div>
                    <div className="flex justify-between md:block w-full md:w-auto text-right md:text-center min-w-[120px]">
                        <div>
                            <p className="text-xs text-gray-400">Entrada</p>
                            <p className="font-bold text-white">R$ 10,00</p>
                        </div>
                        <div className="md:mt-1">
                            <p className="text-xs text-gray-400">Acumulado</p>
                            <p className="font-bold text-green-400">R$ 124k</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full md:w-auto gap-4">
                        <div className="text-right">
                            <div className="flex items-center gap-1 text-gray-300 text-sm font-medium"><i className="fa-regular fa-calendar"></i> Até Oitavas</div>
                        </div>
                        <button className="bg-gray-700 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition">Entrar</button>
                    </div>
                </div>
            </div>
        </>
    )
}