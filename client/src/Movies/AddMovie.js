import React, {useState} from 'react';
import api from '../utils/api';

const AddMovie = (props) => {

    const [newMovie, setNewMovie] = useState({
      id: '',
      title: '',
      director: '',
      metascore: '',
      stars: []
  })

    const handleChange = (e) => {
      if (e.target.name === 'stars') {
        setNewMovie({
          ...newMovie,
          stars: e.target.value.split(',')
        });
      } else {
        setNewMovie({
          ...newMovie,
          [e.target.name]: e.target.value
        })
      };
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        
        api()
            .post('/movies', newMovie)
            .then(response => {
                console.log(response)

                setNewMovie({
                  id: '',
                  title: '',
                  director: '',
                  metascore: '',
                  stars: []
                })
            })
            .catch(error => {
                console.log('Failed to create a new movie', error)
            })
    }

    return(
      <div className='movie-card'>
      <form onSubmit={handleSubmit} className='edit-form'>
          <h1>Add Movie</h1>
          <label>Title</label>
          <h3>{newMovie.title}</h3>
          <input 
              type='text'
              name='title'
              placeholder='New Title'
              value={newMovie.title}
              onChange={handleChange}
          />

          <label>Director</label>
          <h3>{newMovie.director}</h3>
          <input 
              type='text'
              name='director'
              placeholder='New Title'
              value={newMovie.director}
              onChange={handleChange}
          />

          <label>Metascore</label>
          <h3>{newMovie.metascore}</h3>
          <input 
              type='text'
              name='metascore'
              placeholder='New Metascore'
              value={newMovie.metascore}
              onChange={handleChange}
          />

          <label>Stars</label>
          <h3>{newMovie.stars}</h3>
          <input 
              type='text'
              name='stars'
              placeholder='New Stars'
              value={newMovie.stars}
              onChange={handleChange}
          />

          <button className='save-button'>Add</button>
      </form>
  </div>
    )
}

export default AddMovie;