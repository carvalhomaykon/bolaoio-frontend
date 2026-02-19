import React, { useState, useEffect } from 'react';
import dadosJogos from './jogos.json';
import { FootballGames } from './components/FootballGames';

export function Bolao() {
    const [matches, setMatches] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        type: 'match',
        visibility: 'private',
        maxParticipants: '',
        startDate: '',
        endDate: '',
        entryFee: ''
    });

    useEffect(() => {
        setMatches(dadosJogos.jogos);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGameSelect = (game) => {
        setSelectedGame(game);
        if (!formData.name || formData.name.startsWith('Bolão')) {
             setFormData(prev => ({
                 ...prev, 
                 name: `Bolão ${game.time_mandante.nome} x ${game.time_visitante.nome}`,
                 endDate: game.data_hora.slice(0, 16) // Sugere o fechamento para a hora do jogo
             }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedGame) {
            alert("Por favor, selecione uma partida para o bolão.");
            return;
        }
        console.log("Dados do Bolão:", { ...formData, gameId: selectedGame.id });
    };

    return (
        <div id="view-create-pool" className="fade-in max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white">Criar Novo Bolão</h2>
                    <p className="text-gray-400 text-sm">Configure as regras, prazos e times participantes.</p>
                </div>
            </div>

            <div className="bg-card p-6 rounded-xl border border-gray-700 shadow-xl text-white">
                <form onSubmit={handleSubmit}>
                    
                    {/* Detalhes do Bolão */}
                    <div className="mb-8">
                        <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
                            <i className="fa-solid fa-info-circle mr-2"></i> Detalhes do Bolão
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm text-gray-400 mb-1">Nome do Bolão</label>
                                <input 
                                    name="name"
                                    type="text" 
                                    required 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition" 
                                    placeholder="Ex: Amigos do Futebol - Copa 2026" 
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Tipo de Aposta</label>
                                <select 
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                >
                                    <option value="match">Jogo Único (1x1)</option>
                                    <option value="championship">Campeão / Longo Prazo</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Visibilidade</label>
                                <select 
                                    name="visibility"
                                    value={formData.visibility}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                >
                                    <option value="private">🔒 Privado (Apenas Convite)</option>
                                    <option value="public">🌎 Público (Listado na Home)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Limite de Participantes</label>
                                <input 
                                    name="maxParticipants"
                                    type="number" 
                                    value={formData.maxParticipants}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none" 
                                    placeholder="Sem limite" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Regras e Prazos */}
                    <div className="mb-8">
                        <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
                            <i className="fa-solid fa-sliders mr-2"></i> Prazos de Apostas
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Início das Apostas</label>
                                <input 
                                    name="startDate"
                                    type="datetime-local" 
                                    value={formData.startDate}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none" 
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Fechamento (Kick-off)</label>
                                <input 
                                    name="endDate"
                                    type="datetime-local" 
                                    value={formData.endDate}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* O componente agora recebe a lista e a função de seleção */}
                    <div className="mb-8">
                        <FootballGames 
                            games={matches} 
                            onSelect={handleGameSelect} 
                            selectedGameId={selectedGame?.id} 
                        />
                    </div>

                    {/* Footer / Submit */}
                    <div className="pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-400 text-sm">Cota de Entrada:</span>
                            <div className="relative w-36">
                                <span className="absolute left-3 top-2 text-primary font-bold">R$</span>
                                <input 
                                    name="entryFee"
                                    type="number" 
                                    step="0.01"
                                    value={formData.entryFee}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded p-2 pl-8 text-white focus:border-primary outline-none" 
                                    placeholder="0.00" 
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            <button type="button" className="flex-1 md:flex-none px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition">Cancelar</button>
                            <button 
                                type="submit" 
                                disabled={!selectedGame}
                                className={`flex-1 md:flex-none px-8 py-3 rounded-lg font-bold shadow-lg transition transform ${
                                    !selectedGame 
                                    ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                                    : 'bg-primary hover:bg-green-700 text-black hover:-translate-y-0.5'
                                }`}
                            >
                                <i className="fa-solid fa-plus mr-2"></i> Criar Bolão
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}