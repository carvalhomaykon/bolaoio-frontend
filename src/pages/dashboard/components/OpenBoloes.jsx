import { BolaoCard } from "./BolaoCard"

export function OpenBoloes({ items = [] }) {
    return (
        <>
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h2 className="text-2xl font-bold text-white">Bolões Abertos</h2>
                    <p className="text-gray-400 text-sm">Bolões públicos disponíveis.</p>
                </div>
            </div>

            {/* Este container apenas organiza o espaçamento entre os cards */}
            <div className="flex flex-col gap-4 pb-10">
                {items.length > 0 ? (
                    items.map((bolao) => (
                        <BolaoCard key={bolao.id} bolao={bolao} />
                    ))
                ) : (
                    <div className="bg-card border border-gray-700 rounded-xl p-8 text-center">
                        <p className="text-gray-500">Nenhum bolão encontrado no momento.</p>
                    </div>
                )}
            </div>
        </>
    )
}