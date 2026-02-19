import api from "./api";

export const authService = {
    login: async (email, senha) => {
        try {
            const response = await api.post('/auth/login', {
                email, senha
            });

            const { token } = response.data;

            if (!token) {
                throw new Error("Token não retornado pela API");
            }

            localStorage.setItem("token", token);
            localStorage.setItem("nome", response.data.nome);

        } catch (error) {
            throw error.response?.data || { message: 'Erro ao conectar com o servidor' };
        }
    },

    register: async (nome, email, senha) => {
        try {
            const response = await api.post('/auth/register', {
                nome, email, senha
            });
        } catch (error) {
            throw error.response?.data || { message: 'Erro ao conectar com o servidor' };
        }
    },

    isAuthenticated: () => {
        const token = localStorage.getItem("token");
        return !!token;
    }
}