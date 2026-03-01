import api from "./api";

export const partidaService = {
    getAllPartidas: async () => {
        try {
            const response = await api.get('/bolao/listar_partidas');
            return response.data;
        }
        catch (error) {
            throw error.response?.data || { message: 'Erro ao conectar com o servidor' };
        }
    }
}