import React, { useState,  useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/images/logo.jpg';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const NavbarComponent = () => {
  
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

    const dropdownItemStyle = {
      backgroundColor: 'white',  // Blue background
      color: 'black',
    };

    return (
        <Navbar bg="dark" expand="lg">
          <div className='navbar-main'>
            <div className="navbar-logo-container">
            <Navbar.Brand as={NavLink} to="/">
              <img className="navbar-logo" src={Logo} alt="This is the logo"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown title="Menu" id="basic-nav-dropdown" style={{color:'white'}}>
                  <NavDropdown.Item as={NavLink} to="/movies" style={dropdownItemStyle}>Movies</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/tv-shows" style={dropdownItemStyle}>Tv Shows</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/my-ratings" style={dropdownItemStyle}>My Ratings</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
            </div>
            <div className="navbar-search-container">
               <SearchBar onSearch={handleSearch }/>
               {showResults && <SearchResults results={searchResults} />}
            </div>
            <div className="navbar-container">
                  <NavLink to="/login" className="inactive navlink" activeClassName="active">Login</NavLink>
                  <NavLink to="/signup" className="inactive navlink" activeClassName="active">Sign-up</NavLink> 
            </div>
          </div>
        </Navbar>
    );
}

export default NavbarComponent;