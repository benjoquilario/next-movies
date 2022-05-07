import getJSON from "../lib/services/requests";
import { API_KEY } from "../lib/services/helper";
import { API_URL } from "../config";

const api = {
    tv:(movieId: string | number): Promise<any> => {
        return getJSON(`${API_URL}/tv/${movieId}?api_key=${API_KEY}`);
    },
    creditsTv:(movieId: string | number): Promise<any> => {
        return getJSON(`${API_URL}/tv/${movieId}/credits?api_key=${API_KEY}`);
    },
    recommendationTv:(movieId: string | number): Promise<any> => {
        return getJSON(`${API_URL}/tv/${movieId}/recommendations?api_key=${API_KEY}`)
    },
    movie:(movieId: string | number): Promise<any> => {
        return getJSON(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`)
    },
    creditsMovie:(movieId: string | number): Promise<any> => {
        return getJSON(`${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    },
    recommendationMovie:(movieId: string | number): Promise<any> => {
        return getJSON(`${API_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`)
    },
    searchMovies:(searchTerm: string | number): Promise<any> => {
        return getJSON(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`)
    }
}

export default api;