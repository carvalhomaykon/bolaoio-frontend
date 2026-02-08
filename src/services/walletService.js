import api from "./api";

export const walletService = {
    getBalance: async () => {
        try {
            const response = await api.get('/carteira/saldo');
            return response.data.saldo;
        }
        
        catch (error) {
            throw error.response?.data || { message: 'Erro ao conectar com o servidor' };
        }
    },
    deposit: async (amount) => {
        try {
            const response = await api.post('/carteira/depositar', { valor: amount });
            return response.data;
        }
        catch (error) {
            throw error.response?.data || { message: 'Erro ao conectar com o servidor' };
        }
    }
}