import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css'

const SearchBar = ({ value, onChange, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button variant='primary' onClick={onSearch}>Search</Button>
    </div>
  );
};

export default SearchBar;