import React from 'react';

const MovieCard = props => {

  const { title, director, metascore, stars } = props.movie;
  
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <h3>Directed By:</h3> <em>{director}</em>
      <h3>Metascore:</h3> <strong>{metascore}</strong>
      <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
      ))}
    </div>
  );
};

export default MovieCard;
