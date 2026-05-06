import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;

function MovieDetails({ isMovieSelected, setIsMoviesSelected }) {
  const [movieDetails, setMovieDetail] = useState({});
  const [isLoading, setIsloading] = useState(false);

  const {
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
              {/* <div className="rating">
            {isMatched ? (
              `Your given rating is ${matchedMovie.userRating} ⭐`
            ) : (
              <>
                <RatingStars
                  size={25}
                  PermanentStars={PermanentStars}
                  setPermanentStars={setPermanentStars}
                  timesUserRated={timesUserRated}
                />
                {PermanentStars && (
                  <button className="btn-add" onClick={handleAdd}>
                    + Add to list
                  </button>
                )}
              </>
            )}
          </div> */}
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
