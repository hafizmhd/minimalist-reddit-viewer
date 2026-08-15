import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import "./Header.css";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(urlQuery);

  // Sync if URL changes
  useEffect(() => {
    setSearchInput(urlQuery);
  }, [urlQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchInput.trim();
    if (trimmed) {
      setSearchParams({ q: trimmed });
    } else {
      setSearchParams({});
    }
  };

  const handleClear = () => {
    setSearchInput('');
    setSearchParams({});
  };

  return (
    <div className="header-container">
      <Link to="/" className="header-brand">
        <h1>Reddit Client</h1>
      </Link>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <span className="search-icon" aria-hidden="true">🔍</span>
        <input 
          type="text"
          placeholder="Search posts..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
        />
        {searchInput && (
          <button 
            onClick={handleClear} 
            className="clear-search-btn" 
            type="button"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </form>
    </div>
  );
};

export default Header;