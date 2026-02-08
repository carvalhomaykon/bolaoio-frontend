import { ModalDeposit } from "./ModalDeposit"
import { useState } from "react";

export function Balance({ balance }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="bg-gradient-to-br from-green-800 to-dark border border-green-700 rounded-xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                    <p className="text-green-200 text-sm">Saldo Disponível</p>
                    <h2 className="text-4xl font-bold text-white mt-2">R$ {balance.toFixed(2)}</h2>
                    <div className="flex gap-3 mt-6">
                        <button 
                            onClick={() => setOpen(true)} 
                            className="flex-1 bg-white text-green-800 hover:bg-gray-200 py-2 rounded font-bold">Depositar
                        </button>
                        <button 
                            className="flex-1 bg-black/30 hover:bg-black/50 py-2 rounded text-white font-medium border border-white/10">Sacar
                        </button>
                    </div>
                </div>
                <i className="fa-solid fa-wallet text-9xl text-white/5 absolute -bottom-8 -right-8 -rotate-12"></i>
            </div>

            <ModalDeposit
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    )
}