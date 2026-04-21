import React from "react";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        Found <strong>10</strong> results
      </p>
    </nav>
  );
}

export default NavBar;
