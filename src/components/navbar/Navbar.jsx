import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-dark/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <i className="fa-solid fa-trophy text-accent text-2xl"></i>
            <span className="text-2xl font-black text-white tracking-tighter">
              Bolão<span className="text-primary">.io</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link to="/" className="hover:text-primary transition">Início</Link>
            <Link to="/ranking" className="hover:text-primary transition">Ranking Geral</Link>
            <Link to="/regras" className="hover:text-primary transition">Como Jogar</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-gray-300 hover:text-white text-sm font-medium">Entrar</Link>
            <Link to="/register" className="bg-primary hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-bold transition shadow-lg shadow-green-900/20">
              Criar Conta
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}