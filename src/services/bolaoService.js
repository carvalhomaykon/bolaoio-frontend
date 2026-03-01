import api from "./api";

export const bolaoService = {
    createBolao: async (bolaoData) => {
        try {
            const response = await api.post('/bolao/registrar_bolao', bolaoData);
            return response.data;
        }
        catch (error) {
            throw error.response?.data || { message: 'Erro ao conectar com o servidor' };
        }
    },
    getAllBoloes: async () => {
        try {
            const response = await api.get('/bolao/listar');
            return response.data;
        }
        catch (error) {
            throw error.response?.data || { message: 'Erro ao conectar com o servidor' };
        }
    },
    getBolaoById: async (id) => {
        try {
            const response = await api.get('/bolao/', {
                params: {
                    id: id
                }
            });
            return response.data;
        }
        catch (error) {
            throw error.response?.data || { message: 'Erro ao conectar com o servidor' };
        }
    }
}