import React, { useState,  useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../assets/images/logo.jpg';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Navbar = () => {
  
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxNjMzYjhmZGFlZTg0YWNkNTU1ZWY5MTFmZjIxMSIsInN1YiI6IjY1Mjk5YWU3MWYzZTYwMDBhYzRkODExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eClhzdu5OPTFJvvTOKpoetCAbfc2vVRQA2cNniX3m00', // Replace with your API key
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const result = await response.json();
            let arr = result.results;
            setMovies(arr);
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

    const [searchResults, setSearchResults] = useState(movies);
    const [showResults, setShowResults] = useState(false);
    
    const handleSearch = (term) => {
        const filteredResults = movies.filter((item) => 
          item.title.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(filteredResults);
        setShowResults(term !== '');
    };

    return (
        <div className="navbar-main">
            <div className="navbar-logo-container">
                <img className="navbar-logo" src={Logo} alt="This is the logo"></img>
            </div>
            <div className="navbar-search-container">
                <SearchBar onSearch={handleSearch } />
                 {showResults && <SearchResults results={searchResults} /> }
            </div>
            <div className="navbar-container">
                <NavLink to="/" className="inactive navlink" activeClassName="active">Home</NavLink> 
                <NavLink to="/movies" className="inactive navlink" activeClassName="active">Movies</NavLink>
                <NavLink to="/signup" className="inactive navlink" activeClassName="active">Sign-up</NavLink> 
                <NavLink to="/login" className="inactive navlink" activeClassName="active">Login</NavLink>
            </div>
        </div>
    );
}

export default Navbar;