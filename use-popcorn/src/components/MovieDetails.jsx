import { useEffect, useState } from "react";
import RatingStars from "./RatingStars";
const apiKey = import.meta.env.VITE_API_KEY;

function MovieDetails({
  isMovieSelected,
  setIsMoviesSelected,
  setWatched,
  watched,
}) {
  const [movieDetails, setMovieDetail] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [permanentStars, setPermanentStars] = useState(null);

  const {
    imdbID,
    Poster,
    Title,
    Released,
    Runtime,
    Genre,
    imdbRating,
    Plot,
    Actors,
    Director,
  } = movieDetails;

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsloading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${isMovieSelected}`,
        );
        if (!response.ok) throw new Error("something went wrong");
        const data = await response.json();
        if (data.Response === false) throw new Error(data.Error);
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }
    getMovieDetails();
  }, [isMovieSelected]);

  const isMatched = watched.some((movie) => movie.imdbID === isMovieSelected);

  function handleAdd() {
    const movie = {
      imdbID,
      Poster,
      Title,
      imdbRating: Number(imdbRating),
      userRating: permanentStars,
      runtime: Number(Runtime.split(" ")[0]),
    };
    setWatched((prev) => [...prev, movie]);
    setIsMoviesSelected(null);
  }

  return (
    <>
      {isLoading ? (
        <p className="loader">loading...</p>
      ) : (
        <div>
          <div className="details">
            <header>
              <button
                className="back-button"
                onClick={() => setIsMoviesSelected(null)}
              >
                <i className="fa-solid fa-left-long"></i>
              </button>
              <img src={Poster} alt={`Poster of ${Title} movie`} />
              <div className="details-overview">
                <h2>{Title}</h2>
                <p>
                  {Released} &bull; {Runtime}
                </p>
                <p>{Genre}</p>
                <p>
                  <span>⭐️</span>
                  {imdbRating} rating
                </p>
              </div>
            </header>
            <section>
              <div className="rating">
                {isMatched ? (
                  <p>Allready added</p>
                ) : (
                  <>
                    <RatingStars
                      permanentStars={permanentStars}
                      setPermanentStars={setPermanentStars}
                    />
                    {permanentStars && (
                      <button className="btn-add" onClick={handleAdd}>
                        + Add to list
                      </button>
                    )}
                  </>
                )}
              </div>
              <p>
                <em>{Plot}</em>
              </p>
              <p>Starring {Actors}</p>
              <p>Directed by {Director}</p>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
