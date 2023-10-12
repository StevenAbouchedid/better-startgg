import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tournament Name: 
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
