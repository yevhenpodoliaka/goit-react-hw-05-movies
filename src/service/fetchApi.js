const KEY = 'b6201d5209ec246f483ea16253167a90';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTranding() {
        const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&page=${1}`;
        const response = await fetch(url);
        const data = response.json();
        return data;
}
export async function fetchMovieById(movieId) {
         const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;
         const response = await fetch(url);
         const data = await response.json();
         return data;
}

  export async function fetchSearchMovie(searchQuery) {
    const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=${1}&include_adult=false`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  }