import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;

function MovieDetails({ isMovieSelected }) {
  const [movieDetails, setMovieDetail] = useState({});
  console.log(movieDetails);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&i=${isMovieSelected}`,
        );
        if (!response.ok) throw new Error("something went wrong");
        const data = await response.json();
        if (data.Response === false) throw new Error(data.Error);
        setMovieDetail(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [isMovieSelected]);
  return <div>movjfhsfhijhi</div>;
}

export default MovieDetails;
