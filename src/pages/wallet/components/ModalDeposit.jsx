import { useState } from "react";
import { walletService } from "../../../services/walletService";

export function ModalDeposit({ isOpen, onClose }) {
    const [amount, setAmount] = useState("");
    // const [pixGenerated, setPixGenerated] = useState(false);

    if (!isOpen) return null;

    function handleSelectAmount(value) {
        setAmount(value);
    }

    function handleDeposit() {
        if (!amount) return;

        if (amount <= 0) {
            alert("Valor inválido para depósito");
            return;
        }

        try {
            walletService.deposit(Number(amount));
            alert("Depósito realizado com sucesso!");
            onClose();
        }
        catch (error) {
            alert(error.message || "Erro ao realizar depósito");
        }
    }

    return (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity">
            <div className="bg-card border border-gray-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl transform transition-transform scale-100">
                
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-green-900 to-emerald-900 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white">
                        <i className="fa-solid fa-wallet mr-2"></i>
                        Adicionar Saldo
                    </h3>

                    <button
                        onClick={onClose}
                        className="text-green-200 hover:text-white transition"
                    >
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    
                    {/* Método */}
                    <div className="flex gap-2 mb-6 bg-dark p-1 rounded-lg">
                        <button className="flex-1 py-2 bg-gray-700 text-white rounded-md text-sm font-bold shadow-sm">
                            PIX (Instantâneo)
                        </button>
                        <button className="flex-1 py-2 text-gray-400 text-sm font-medium cursor-not-allowed">
                            Cartão de Crédito
                        </button>
                    </div>

                    {/* Valor */}
                    <div className="mb-6">
                        <label className="block text-xs uppercase font-bold text-gray-500 mb-2">
                            Valor do Depósito
                        </label>

                        <div className="grid grid-cols-3 gap-3 mb-3">
                            {[20, 50, 100].map(value => (
                                <button
                                    key={value}
                                    onClick={() => handleSelectAmount(String(value))}
                                    className="border border-gray-600 hover:border-primary hover:text-primary text-gray-300 py-2 rounded-lg text-sm transition font-mono"
                                >
                                    R$ {value}
                                </button>
                            ))}
                        </div>

                        <div className="relative">
                            <span className="absolute left-3 top-3 text-gray-400">R$</span>
                            <input
                                type="number"
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                                placeholder="0,00"
                                className="w-full bg-dark border border-gray-600 rounded-lg py-2.5 pl-10 pr-4 text-white focus:border-primary focus:outline-none font-bold text-lg"
                            />
                        </div>
                    </div>

                    {/* PIX 
                    {pixGenerated && (
                        <div className="text-center fade-in bg-white p-4 rounded-xl mb-4">
                            <h1 className="font-bold mb-1">Imagem do QRCode</h1>
                            <p className="text-xs text-gray-500 mb-2">
                                Escaneie ou copie o código abaixo:
                            </p>

                            <div className="flex items-center gap-2 border border-gray-300 rounded p-1">
                                <input
                                    type="text"
                                    value="00020126580014BR.GOV.BCB.PIX0136..."
                                    readOnly
                                    className="w-full text-xs text-gray-600 bg-transparent outline-none"
                                />
                                <button className="text-primary font-bold text-xs uppercase px-2">
                                    Copiar
                                </button>
                            </div>
                        </div>
                    )}
                    */}

                    {/* Action */}
                    <button
                        onClick={handleDeposit}
                        className="w-full bg-primary hover:bg-green-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-green-900/50 transition"
                    >
                        Pagar Agora
                    </button>
                </div>
            </div>
        </div>
    );
}
