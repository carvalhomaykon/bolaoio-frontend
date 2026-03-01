import api from "./api";

export const palpiteService = {
    postPalpite: async (palpiteData) => {
        try {
            console.log(`Enviando palpite:`, palpiteData);
            
            const response = await api.post(`/bolao/registrar_palpite`, palpiteData)
            console.log("Resposta do servidor:", response.data);
            return { success: true, message: 'Palpite registrado com sucesso!' };
        } catch (error) {
            console.error("Erro ao enviar palpite:", error);
            const errorMessage = error.response?.data?.detail || 'Erro ao conectar com o servidor';
            console.log("Mensagem de erro detalhada:", errorMessage);
            return { success: false, message: errorMessage };
        }
    },
    getPalpiteByUser: async () => {
        try {
            const response = await api.get(`/bolao/listar_palpites_por_usuario`);
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar palpites:", error);
            throw error;
        }
    }
}