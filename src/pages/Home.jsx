import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  // const movies = [
  //   { id: 1, title: "Insidious: Chapter 2", release_date: "2013" },
  //   { id: 2, title: "Get Out", release_date: "2017" },
  //   {
  //     id: 3,
  //     title: "Talk To Me",
  //     release_date: "2023",
  //   },
  //   { id: 4, title: "Fractured", release_date: "2019" },
  //   { id: 5, title: "Blink Twice", release_date: "2024" },
  // ];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to search movies...");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        {" "}
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          //& set to first value of usestate
          onChange={(e) => setSearchQuery(e.target.value)}
          //& this onChange is how you are able to actually type things into the text box bc with just "value" above it will have a fixed value of the {search query used above}
        />
        <button type="submit" className="search-button">
          {" "}
          Search{" "}
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            //& (movie.title.toLowerCase().startsWith) - conditionally render movie card only if the beginning of movie title begins with the search text (searchquery)
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
