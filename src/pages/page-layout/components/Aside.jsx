import { Link } from "react-router-dom"

export function Aside({ balance }) {
    return (
        <aside className="w-64 bg-card border-r border-gray-700 hidden md:flex flex-col">
            <div className="p-6 flex items-center gap-3">
                <i className="fa-solid fa-earth-americas text-primary text-2xl"></i>
                <h1 className="text-2xl font-bold text-white tracking-tighter">Bolao<span className="text-accent">.io</span></h1>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-4">
                <Link 
                    to="/dashboard" 
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition flex items-center gap-3">
                    <i className="fa-solid fa-house w-5"></i> Painel da Copa
                </Link>

                <button onclick="router('my-bets')" className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition flex items-center gap-3">
                    <i className="fa-solid fa-ticket w-5"></i> Meus Palpites
                </button>

                <Link 
                    to="/carteira" 
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition flex items-center gap-3">
                    <i className="fa-solid fa-wallet w-5"></i> Carteira
                </Link>
                
                <div className="pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Organizador</div>
                
                <button onclick="router('create-pool')" className="w-full text-left px-4 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition flex items-center gap-3">
                    <i className="fa-solid fa-users w-5"></i> Criar Bolão
                </button>

                <div className="pt-4 pb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Admin</div>
                <button onclick="router('admin')" className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition flex items-center gap-3">
                    <i className="fa-solid fa-shield-halved w-5"></i> Gestão do Sistema
                </button>
            </nav>

            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center gap-3" onclick="router('settings')">
                    <div>
                        <p className="text-sm font-medium text-white">Torcedor Demo</p>
                        <p className="text-xs text-accent font-bold">R$ {balance.toFixed(2)}</p>
                    </div>
                    
                </div>
            </div>
        </aside>
    )
}