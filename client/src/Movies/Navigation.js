import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className='navigation'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/create-movie'}>Add Movie</NavLink>
      </div>
    </div>
  )
}

export default Navigation;