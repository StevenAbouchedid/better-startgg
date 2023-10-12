import React, { useState } from 'react';
import SearchForm from './pages/SearchForm';
import ResultsList from './pages/ResultsList';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (name) => {
    const mockData = [
      {
        id: '1',
        link: '#',
        name: 'Super Tournament',
        icon: 'https://via.placeholder.com/50',
        game: 'Chess',
        date: '2023-11-12',
        attendees: 100,
      },
      {
        id: '2',
        link: '#',
        name: 'Mega Tournament',
        icon: 'https://via.placeholder.com/50',
        game: 'Checkers',
        date: '2023-12-14',
        attendees: 150,
      },
    ];

    // Optional: Simple client-side filtering by name
    const filteredResults = mockData.filter(tournament =>
      tournament.name.toLowerCase().includes(name.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div>
      <h1>Tournament Search</h1>
      <SearchForm onSearch={handleSearch} />
      <ResultsList results={results} />
    </div>
  );
};

export default App;
