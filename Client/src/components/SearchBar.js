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
