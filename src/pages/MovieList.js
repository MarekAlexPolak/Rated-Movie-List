import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDetail from './MovieDetail';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/top_rated', {
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxNjMzYjhmZGFlZTg0YWNkNTU1ZWY5MTFmZjIxMSIsInN1YiI6IjY1Mjk5YWU3MWYzZTYwMDBhYzRkODExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eClhzdu5OPTFJvvTOKpoetCAbfc2vVRQA2cNniX3m00', // Replace with your API key
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            const result = await response.json();
            let arr = result.results;
            setMovies(arr);
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    return (
      <div className="movie-list-main">
        <h2>Movie List</h2>
        <div className='movie-list-list'>
          {movies.map(movie => (
              <li key={movie.id}>
                  <Link className="navlink" to={`/movies/${movie.id}`} state={{id: movie.id}}>{movie.title}</Link>
              </li>
            ))}
        </div>
      </div>
    );
};

export default MovieList;