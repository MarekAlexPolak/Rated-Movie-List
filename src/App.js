import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ApiAuth from './components/ApiAuth';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

//Api Key 8d41633b8fdaee84acd555ef911ff211
//Api Read Access Token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxNjMzYjhmZGFlZTg0YWNkNTU1ZWY5MTFmZjIxMSIsInN1YiI6IjY1Mjk5YWU3MWYzZTYwMDBhYzRkODExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eClhzdu5OPTFJvvTOKpoetCAbfc2vVRQA2cNniX3m00


const App = () => {
  return (
    <Router>
      <ApiAuth/>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/movies/:id" Component={MovieDetail} />
          <Route path="/movies" Component={MovieList} />
          <Route path="/" exact>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
