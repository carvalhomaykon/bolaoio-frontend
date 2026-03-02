import { Balance } from "./components/Balance"
import { DailyLimit } from "./components/DailyLimit"
import { TransactionHistory } from "./components/TransactionHistory"
import { walletService } from '../../services/walletService';
import { useEffect, useState } from "react";
import { ModalDeposit } from "./components/ModalDeposit";

export function Wallet() {
    const [balance, setBalance] = useState(0);
    const [extrato, setExtrato] = useState([]);
    
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const balance = await walletService.getBalance();
                setBalance(balance);
            } catch (error) {
                console.error("Erro ao obter saldo:", error);
            }
        };

        const getExtrato = async () => {
            try {
                const extrato = await walletService.getExtrato();
                setExtrato(extrato);
            } catch (error) {
                console.error("Erro ao obter extrato:", error);
            }
        };

        fetchBalance();
        getExtrato();
    }, []);

    return (
        <>
            <div id="view-wallet" className="fade-in hide">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 space-y-6">
                        <Balance balance={balance} />
                        <DailyLimit />
                    </div>
                    <TransactionHistory extrato={extrato} />
                </div>
            </div>
        </>
    )
}