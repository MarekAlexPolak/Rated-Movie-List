import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApiAuth from './components/ApiAuth';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import NavbarComponent from './components/NavBarComponent';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { Container } from 'react-bootstrap';

//Api Key 8d41633b8fdaee84acd555ef911ff211
//Api Read Access Token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxNjMzYjhmZGFlZTg0YWNkNTU1ZWY5MTFmZjIxMSIsInN1YiI6IjY1Mjk5YWU3MWYzZTYwMDBhYzRkODExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eClhzdu5OPTFJvvTOKpoetCAbfc2vVRQA2cNniX3m00


const App = () => {

  const containerStyle = { 
    backgroundColor: 'rgb(10,10,10)',
    color: 'white',
    minHeight: '100vh'
  }

  return (
    <Router>
        <ApiAuth/>
        <NavbarComponent />
        <Container fluid style={containerStyle}>
            <Routes>
              <Route path="/movies/:id" Component={MovieDetail} />
              <Route path="/movies" Component={MovieList} />
              <Route path="/signup" Component={Signup} />
              <Route path="/login" Component={Login} />
              <Route path="/" Component={Home}>
              </Route>
            </Routes>
        </Container>
    </Router>
  );
};

export default App;
