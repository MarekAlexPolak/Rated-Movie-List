// SearchResults.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SearchResults = ({ results }) => {   

    const [showList, setShowList] = useState(true);

    const refreshWindow = () => {
      // Refresh the window after 5 milliseconds
      window.location.reload();
    };

    const handleClick = () => { 
      if(showList){
        setShowList(false);
      }
      const timeoutId = setTimeout(refreshWindow, 0.1);

      return () => { 
        clearTimeout(timeoutId);
      }
    }

    return (
      showList && <ul className='search-results'>
                  {results.map((movie, index) => (
                    <li key={index}>
                      <NavLink className="navlink" to={`/movies/${movie.id}`} state={{id: movie.id}} onClick={handleClick}>{movie.title}</NavLink></li>
                  ))}
                </ul>
    );
};

export default SearchResults;
