import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "4e7a44d757ed6bed2c5ad8a17706e494",
    language: "en-US",
  },
});

export const tvshowsApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  tvshowDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  tvshowCredits: (id) => api.get(`tv/${id}/credits`),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: term,
      },
    }),
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  popular: () => api.get("movie/popular"),
  upcoming: () => api.get("movie/upcoming"),
  topRated: () => api.get("movie/top_rated"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  movieCredits: (id) => api.get(`movie/${id}/credits`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: term,
      },
    }),
};
