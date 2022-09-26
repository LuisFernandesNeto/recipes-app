import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Search Recipes"
      />
    </div>
  );
}

export default SearchBar;
