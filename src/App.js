import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container }  from "react-bootstrap";
import ApiAuth from './components/ApiAuth';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';

//Api Key 8d41633b8fdaee84acd555ef911ff211
//Api Read Access Token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxNjMzYjhmZGFlZTg0YWNkNTU1ZWY5MTFmZjIxMSIsInN1YiI6IjY1Mjk5YWU3MWYzZTYwMDBhYzRkODExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eClhzdu5OPTFJvvTOKpoetCAbfc2vVRQA2cNniX3m00


const App = () => {
  return (
    <Router>
        <ApiAuth/>
        <Navbar />
        <Container fluid>
          <Routes>
            <Route path="/movies/:id" Component={MovieDetail} />
            <Route path="/movies" Component={MovieList} />
            <Route path="/" Component={Home}>
            </Route>
          </Routes>
        </Container>
    </Router>
  );
};

export default App;
