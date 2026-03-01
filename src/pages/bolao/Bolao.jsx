import React, { useState, useEffect } from 'react';
import dadosJogos from './jogos.json';
import { FootballGames } from './components/FootballGames';
import { bolaoService } from '../../services/bolaoService';

export function Bolao() {
    const [matches, setMatches] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);

    const [formData, setFormData] = useState({
        nome: '',
        visibilidade: 0,
        valor: '',
        dtFechamento: '',
        tipoBolao: 0,
        partidaId: '',
        maxParticipantes: ''
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

        if (!formData.nome || formData.nome.startsWith('Bolão')) {
            const novoNome = (!formData.nome || formData.nome.startsWith('Bolão')) 
                ? `Bolão ${game.time_mandante.nome} x ${game.time_visitante.nome}` 
                : formData.nome;

            setFormData(prev => ({
                ...prev,
                nome: novoNome,
                partidaId: game.id,
                dtFechamento: game.data_hora.slice(0, 10)
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedGame) {
            alert("Por favor, selecione uma partida para o bolão.");
            return;
        }

        console.log("Dados do formulário antes do envio:", formData);

        const payload = {
            nome: formData.nome,
            visibilidade: parseInt(formData.visibilidade),
            valor: parseFloat(formData.valor),
            dtFechamento: formData.dtFechamento.data_hora.slice(0, 10),
            tipoBolao: parseInt(formData.tipoBolao),
            partidaId: formData.partidaId,
            maxParticipantes: formData.maxParticipantes ? parseInt(formData.maxParticipantes) : null
        };

        console.log("Payload para criação do bolão:", payload);

        bolaoService.createBolao(payload)
            .then(response => {
                alert("Bolão criado com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao criar bolão:", error);
                alert("Ocorreu um erro ao criar o bolão. Tente novamente.");
            });
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
                                    name="nome"
                                    type="text" 
                                    required 
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition" 
                                    placeholder="Ex: Amigos do Futebol - Copa 2026" 
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Tipo de Aposta</label>
                                <select 
                                    name="tipoBolao"
                                    value={formData.tipoBolao}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                >
                                    <option value={0}>Jogo Único (1x1)</option>
                                    <option value={1}>Campeão / Longo Prazo</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Visibilidade</label>
                                <select 
                                    name="visibilidade"
                                    value={formData.visibilidade}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-gray-600 rounded-lg p-3 text-white focus:border-primary focus:outline-none"
                                >
                                    <option value={0}>🔒 Privado (Apenas Convite)</option>
                                    <option value={1}>🌎 Público (Listado na Home)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Limite de Participantes</label>
                                <input 
                                    name="maxParticipantes"
                                    type="number"
                                    value={formData.maxParticipantes}
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
                                <label className="block text-sm text-gray-400 mb-1">Fechamento (Kick-off)</label>
                                <input 
                                    name="dtFechamento"
                                    type="date" 
                                    value={formData.dtFechamento}
                                    max={selectedGame ? selectedGame.data_hora.slice(0, 10) : ""}
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
                                    name="valor"
                                    type="number" 
                                    step="0.01"
                                    value={formData.valor}
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