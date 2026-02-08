import { Outlet } from 'react-router-dom'
import { Aside } from './components/Aside';
import { Header } from './components/Header';
import { useEffect, useState } from "react";
import { walletService } from '../../services/walletService';

export function PagesLayout() {
    const [balance, setBalance] = useState(0);
    
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const balance = await walletService.getBalance();
                setBalance(balance);
            } catch (error) {
                console.error("Erro ao obter saldo:", error);
            }
        };

        fetchBalance();
    }, []);

    return (
        <div className="bg-dark text-gray-200 font-sans h-screen flex overflow-hidden">
            <Aside balance={balance} />

            <main className="flex-1 flex flex-col overflow-hidden relative">
                <Header balance={balance} />
                <div id="app-content" className="flex-1 overflow-y-auto p-6 bg-dark scroll-smooth">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}