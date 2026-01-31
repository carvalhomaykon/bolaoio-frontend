import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="bg-dark text-gray-200 font-sans h-screen w-full flex overflow-hidden">

        <div class="hidden lg:flex lg:w-1/2 relative bg-stadium items-center justify-center">
            <div class="absolute inset-0 bg-green-900/80 backdrop-blur-sm"></div>
            
            <div class="relative z-10 text-center px-12">
                <div class="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/10 backdrop-blur border border-white/20 text-accent text-5xl shadow-2xl">
                    <i class="fa-solid fa-trophy"></i>
                </div>
                <h1 class="text-5xl font-bold text-white tracking-tighter mb-4">Bolão<span class="text-accent">.io</span></h1>
                <p class="text-xl text-gray-200 font-light">A emoção da Copa do Mundo começa no seu palpite. Junte-se a milhares de torcedores.</p>
                
                <div class="mt-12 flex gap-4 justify-center text-white/50">
                    <i class="fa-brands fa-instagram hover:text-white transition cursor-pointer text-xl"></i>
                    <i class="fa-brands fa-twitter hover:text-white transition cursor-pointer text-xl"></i>
                    <i class="fa-brands fa-tiktok hover:text-white transition cursor-pointer text-xl"></i>
                </div>
            </div>
        </div>

        {/* Conteúdo da rota */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-dark relative">
            <Outlet />
        </div>
    </div>
  )
}
