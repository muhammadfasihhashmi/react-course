import React from "react";
import SearchMoviesBar from "./SearchMoviesBar";

function NavBar({ setQuery, query, movies }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <SearchMoviesBar setQuery={setQuery} query={query} />
      <p className="num-results">
        Found <strong>{movies?.length ?? 0}</strong> results
      </p>
    </nav>
  );
}

export default NavBar;
