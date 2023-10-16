// SearchBar.js
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ onSearch }) => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    const handleUrlChange = () => {
        setSearchTerm('');
    };
    
    useEffect(() => {
        // Listen for changes in the URL
        window.addEventListener('popstate', handleUrlChange);
        console.log("changed");

        return () => {
            // Cleanup: remove the event listener when the component unmounts
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, [window.location.pathname]); // Empty dependency array to run the effect only once
    
    return (
        <div className='search-bar-container'>
            <Form.Control
            type="text"
            id="searchTerm"
            placeholder='Search'
            className='search-bar'
            value={searchTerm}
            onChange={handleChange}
            />
        </div>      
    );
};

export default SearchBar;
