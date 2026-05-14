import { useEffect, useState } from "react";
import MoviesListBox from "./components/MoviesListBox";
import NavBar from "./components/NavBar";
import WatchedMoviesBox from "./components/WatchedMoviesBox";
import useMovies from "./hooks/useMovies";

function App() {
  const [watched, setWatched] = useState(
    localStorage.getItem("watchedMovies")
      ? JSON.parse(localStorage.getItem("watchedMovies"))
      : [],
  );
  const [query, setQuery] = useState("");
  const [isMovieSelected, setIsMoviesSelected] = useState(null);

  const { movies, isLoading } = useMovies(query);

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
