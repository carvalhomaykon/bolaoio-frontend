import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { bolaoService } from "../../services/bolaoService";
import { palpiteService } from '../../services/palpiteService';

export default function Palpite() {
    const { idBolao } = useParams();
    const navigate = useNavigate();
    
    // Estados para os palpites (vinculados diretamente aos inputs)
    const [golsA, setGolsA] = useState(0);
    const [golsB, setGolsB] = useState(0);
    const [issubmitting, setIsSubmitting] = useState(false);
    const [dadosBolao, setDadosBolao] = useState(null);

    // Busca os dados do bolão ao carregar
    useEffect(() => {
        bolaoService.getBolaoById(idBolao)
            .then(res => {
                // Ajuste aqui dependendo se sua API retorna res ou res.data
                const data = res.data || res;
                setDadosBolao(data);
            })
            .catch(err => {
                console.error("Erro ao buscar dados do bolão:", err);
                alert("Não foi possível carregar os dados do bolão.");
                navigate('/dashboard');
            });
    }, [idBolao, navigate]);

    const handleSalvarPalpite = async () => {
        setIsSubmitting(true);
        
        // Montamos o objeto com os estados atuais
        const payload = {
            BolaoId: idBolao,
            golsTimeA: golsA,
            golsTimeB: golsB
        };

        try {
            console.log("Enviando payload:", payload);
            const result = await palpiteService.postPalpite(payload);
            if (result.success) {
                alert(result.message);
                navigate('/dashboard');
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert(error.response?.data?.message || "Erro ao registrar palpite.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex-1 p-6 bg-dark min-h-screen flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl bg-card border border-gray-700 rounded-3xl p-8 shadow-2xl">
                
                {/* Cabeçalho */}
                <div className="text-center mb-10">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs">Seu Palpite</span>
                    <h1 className="text-3xl font-bold text-white mt-2">
                        {dadosBolao?.nome || 'Carregando...'}
                    </h1>
                    <div className="flex justify-center gap-4 mt-2 text-gray-400 text-sm">
                        <span className="text-green-400 font-medium">
                            Entrada: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dadosBolao?.valor || 0)}
                        </span>
                    </div>
                </div>

                {/* Área do Placar */}
                <div className="flex items-center justify-around gap-4 mb-12">
                    {/* Time A */}
                    <div className="flex flex-col items-center gap-4 flex-1">
                        <span className="font-bold text-white text-lg text-center h-14 flex items-center">
                            {dadosBolao?.timeA || 'Time A'}
                        </span>
                        <input 
                            type="number" 
                            min="0"
                            value={golsA}
                            onChange={(e) => setGolsA(Math.max(0, parseInt(e.target.value) || 0))}
                            className="w-20 h-20 bg-gray-800 border-2 border-gray-700 rounded-2xl text-center text-3xl font-bold text-white focus:border-primary outline-none transition"
                        />
                    </div>

                    <div className="text-4xl font-black text-gray-600 self-end pb-6">X</div>

                    {/* Time B */}
                    <div className="flex flex-col items-center gap-4 flex-1">
                        <span className="font-bold text-white text-lg text-center h-14 flex items-center">
                            {dadosBolao?.timeB || 'Time B'}
                        </span>
                        <input 
                            type="number" 
                            min="0"
                            value={golsB}
                            onChange={(e) => setGolsB(Math.max(0, parseInt(e.target.value) || 0))}
                            className="w-20 h-20 bg-gray-800 border-2 border-gray-700 rounded-2xl text-center text-3xl font-bold text-white focus:border-primary outline-none transition"
                        />
                    </div>
                </div>

                {/* Rodapé e Ações */}
                <div className="flex flex-col gap-4">
                    <button 
                        onClick={handleSalvarPalpite}
                        disabled={issubmitting || !dadosBolao}
                        className="w-full bg-primary hover:bg-opacity-90 disabled:bg-gray-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                    >
                        {issubmitting ? (
                            <i className="fa-solid fa-spinner animate-spin"></i>
                        ) : (
                            <i className="fa-solid fa-check"></i>
                        )}
                        Confirmar Palpite
                    </button>
                    
                    <button 
                        onClick={() => navigate(-1)}
                        className="w-full bg-transparent hover:bg-white/5 text-gray-400 font-medium py-2 rounded-xl transition"
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
}