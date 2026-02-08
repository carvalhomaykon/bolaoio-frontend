export function DailyLimit() {
    return (
        <div className="bg-card border border-gray-700 rounded-xl p-6">
            <h3 className="font-bold text-white mb-4">Jogo Responsável</h3>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Limite Diário na Copa</span>
                        <span className="text-white">R$ 200 / R$ 500</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-accent h-2 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}