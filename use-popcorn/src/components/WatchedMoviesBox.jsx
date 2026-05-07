import { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import WatchedMoviesList from "./WatchedMoviesList";
import MovieDetails from "./MovieDetails";

function WatchedMoviesBox({
  watched,
  setWatched,
  isMovieSelected,
  setIsMoviesSelected,
}) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          {isMovieSelected ? (
            <MovieDetails
              isMovieSelected={isMovieSelected}
              setIsMoviesSelected={setIsMoviesSelected}
              setWatched={setWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default WatchedMoviesBox;
