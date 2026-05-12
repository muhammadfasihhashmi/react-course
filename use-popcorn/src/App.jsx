import { useEffect, useState } from "react";
import MoviesListBox from "./components/MoviesListBox";
import NavBar from "./components/NavBar";
import WatchedMoviesBox from "./components/WatchedMoviesBox";

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(
    localStorage.getItem("watchedMovies")
      ? JSON.parse(localStorage.getItem("watchedMovies"))
      : [],
  );
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMovieSelected, setIsMoviesSelected] = useState(null);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
        );
        if (!response.ok) throw new Error("something went wrong");

        const data = await response.json();

        if (data.response === false) throw new Error(data.message);

        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [query]);

  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify(watched));
  }, [watched]);

  return (
    <>
      <NavBar setQuery={setQuery} query={query} movies={movies} />
      {/* MainSection */}
      <main className="main">
        <MoviesListBox
          movies={movies}
          isLoading={isLoading}
          setIsMoviesSelected={setIsMoviesSelected}
        />
        <WatchedMoviesBox
          watched={watched}
          isMovieSelected={isMovieSelected}
          setIsMoviesSelected={setIsMoviesSelected}
          setWatched={setWatched}
        />
      </main>
    </>
  );
}

export default App;
