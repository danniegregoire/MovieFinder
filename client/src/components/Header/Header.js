import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className="app-header">
      <FontAwesomeIcon icon={faFilm} className="fas fa-film" size="2x"/>
      <h1>Movie Finder</h1>
    </div>
  )
}

export default Header;
