// SearchBar.js
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ onSearch }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onSearch(term);
    };

    return (
        <div>
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
