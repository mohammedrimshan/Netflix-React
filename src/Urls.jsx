import { API_KEY } from "./Constants/Constants";

export const orginals = `trending/movie/day?api_key=${API_KEY}&language=en-US&page=2`;

export const action = `discover/movie?api_key=${API_KEY}&with_genres=35`;
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35&page=7`;
export const toprated = `movie/top_rated?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;
export const upcoming = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
