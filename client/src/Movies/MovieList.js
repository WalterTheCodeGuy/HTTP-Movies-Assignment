import React, {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import api from '../utils/api';

const MovieList = () => {
  const [movies, setMovies] = useState ([])
    useEffect(() => {
      api().get('/movies')
        .then(res => setMovies(res.data))
        .catch(err => console.log(err));
    }, [])
  
  return (
    <div className='movie-list'>
      
      {movies.map(movie => (
        <div className='movieBox'>
            <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )  
}

export default MovieList;