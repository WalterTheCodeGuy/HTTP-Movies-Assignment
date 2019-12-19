import React, { useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from "./Movies/UpdateMovie";
import AddMovie from './Movies/AddMovie';
import Navigation from './Movies/Navigation';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <Navigation />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path="/update-movie/:id"
        render={props => <UpdateMovie {...props} />} />
      <Route path='/create-movie' component={AddMovie}/>
    </>
  );
};

export default App;
