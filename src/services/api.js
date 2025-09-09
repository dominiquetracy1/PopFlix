const API_KEY = "ed79a1389092b2b46cc9f890d3124f46";
const BASE_URL = "https://api.themoviedb.org/3";
//& doing search and popular movies

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  //& fetch result
  const data = await response.json();
  //& wait to get results using json
  return data.results;
  //& return results
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  //& fetch result
  const data = await response.json();
  //& wait to get results using json
  return data.results;
  //& return results
};
