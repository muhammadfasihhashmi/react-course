import MoviesListBox from "./MoviesListBox";
import WatchedMoviesList from "./WatchedMoviesBox";
import WatchedMoviesBox from "./WatchedMoviesBox";

function MainSection() {
  return (
    <main className="main">
      <MoviesListBox />
      <WatchedMoviesBox />
    </main>
  );
}

export default MainSection;
