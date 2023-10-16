// SearchResults.js
import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ results }) => {
  return (
    <ul className='search-results'>
      {results.map((item, index) => (
        <li key={index}>
          <Link className="navlink" to={`/movies/${movie.id}`} state={{id: movie.id}}>{movie.title}</Link></li>
      ))}
    </ul>
  );
};

export default SearchResults;
