function SearchMoviesBar({ setQuery, query }) {
  function handleQuery(event) {
    setQuery(event.target.value);
  }
  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleQuery}
      />
    </div>
  );
}

export default SearchMoviesBar;
