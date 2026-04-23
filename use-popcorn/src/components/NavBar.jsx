import React from "react";
import SearchMoviesBar from "./SearchMoviesBar";

function NavBar({ setQuery, query }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <SearchMoviesBar setQuery={setQuery} query={query} />
      <p className="num-results">
        Found <strong>10</strong> results
      </p>
    </nav>
  );
}

export default NavBar;
