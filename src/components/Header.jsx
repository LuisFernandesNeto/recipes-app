import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { string, bool } from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ page, search }) {
  const [searchTerm, setSearchTerm] = useState(false);

  const handleSearch = () => {
    // e.preventDefault();
    if (searchTerm) {
      setSearchTerm(false);
    } else {
      setSearchTerm(true);
    }
    return (
      <div>
        <header>
          <div>
            <Link to="/Perfil">
              <img src={ ProfileIcon } alt="Profile Icon" data-testid="profile-top-btn" />
            </Link>
            <h3 data-testid="page-title">{page}</h3>
            {search
            && (
              <button type="button" onClick={ handleSearch }>
                <img src={ SearchIcon } alt="Search Icon" data-testid="search-top-btn" />
              </button>
            )}
          </div>
        </header>
        {searchTerm && <SearchBar page={ page } />}
      </div>
    );
  };
}

Header.propTypes = {
  page: string,
  search: bool,
}.isRequired;

export default Header;
