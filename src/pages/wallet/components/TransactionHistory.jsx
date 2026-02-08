export function TransactionHistory() {
    return (
        <div class="lg:col-span-2 bg-card border border-gray-700 rounded-xl p-6">
            <h3 class="font-bold text-white mb-4">Extrato Financeiro</h3>
            <table class="w-full text-left text-sm text-gray-400">
                <thead class="text-xs uppercase bg-dark text-gray-300">
                    <tr>
                        <th class="px-4 py-3">Data</th>
                        <th class="px-4 py-3">Descrição</th>
                        <th class="px-4 py-3">Status</th>
                        <th class="px-4 py-3 text-right">Valor</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-700">
                    <tr>
                        <td class="px-4 py-3">Hoje 14:30</td>
                        <td class="px-4 py-3">Green - Brasil x Suíça (Ao Vivo)</td>
                        <td class="px-4 py-3"><span class="text-green-400 bg-green-900/20 px-2 py-0.5 rounded text-xs border border-green-900/50">Liquidado</span></td>
                        <td class="px-4 py-3 text-right text-green-400">+ R$ 150,00</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-3">Ontem 10:00</td>
                        <td class="px-4 py-3">Aposta - França x Dinamarca</td>
                        <td class="px-4 py-3"><span class="text-yellow-500 bg-yellow-900/20 px-2 py-0.5 rounded text-xs border border-yellow-900/50">Pendente</span></td>
                        <td class="px-4 py-3 text-right text-red-400">- R$ 25,00</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-3">28/06 09:15</td>
                        <td class="px-4 py-3">Depósito PIX</td>
                        <td class="px-4 py-3"><span class="text-green-400">Confirmado</span></td>
                        <td class="px-4 py-3 text-right text-white">+ R$ 500,00</td>
                    </tr>
                    <tr>
                        <td class="px-4 py-3">25/06 18:00</td>
                        <td class="px-4 py-3">Red - Portugal x Uruguai</td>
                        <td class="px-4 py-3"><span class="text-red-400">Perdida</span></td>
                        <td class="px-4 py-3 text-right text-gray-500">- R$ 50,00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}