import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;

function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return { movies, isLoading };
}

export default useMovies;
