import React,{useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import api from '../utils/api'

const Movie = (props) => {
  const [movie, setMovie] = useState({
    id:'',
    directer:'',
    title:'',
    stars:[],
    metascore:''
  })

  useEffect(() => {
    api().get(`/movies/${props.match.params.id}`)
      .then(res => {
        setMovie(res.data)
      })
      .catch(err => console.log(err));
  }, [props.match.params.id])

  const saveMovie = () => {
    props.addToSavedList(movie)
  };

  const deleteMovie = (movie) => {
    api().delete(`/movies/${props.match.params.id}`, movie)
      .then(res => {
        props.history.push(`/`)
      })
      .catch(err => {
        console.log(err)
      })
  }
  if(!movie){
      return <div>Loading movie information...</div>;
    }
      return (
        <div className="save-wrapper">
            <MovieCard movie={movie} />
            <div className="save-button" onClick={saveMovie}>
                Save
            </div>
            <Link to={`/update-movie/${movie.id}`}>
              <button className='edit-button'>Edit</button>
            </Link>
            <button className='delete-button' onClick = {deleteMovie}>
              Delete
            </button>
        </div>
  )
}

export default Movie;
