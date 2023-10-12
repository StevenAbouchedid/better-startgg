import React from 'react';

const ResultsList = ({ results }) => {
  return (
    <div>
      {results.map(result => (
        <div key={result.id}>
          <a href={result.link} target="_blank" rel="noopener noreferrer">
            <img src={result.icon} alt={result.name} width="50" height="50" />
          </a>
          <h2>{result.name}</h2>
          <p>Game: {result.game}</p>
          <p>Date: {result.date}</p>
          <p>Attendees: {result.attendees}</p>
        </div>
      ))}
    </div>
  );
};

export default ResultsList;
