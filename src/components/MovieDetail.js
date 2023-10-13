import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
    let { state } = useLocation();
    console.log(state);
    //const receivedData = props.location.state.data;
    //console.log(props);
    //console.log(receivedData);
    const [movie, setMovie] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.themoviedb.org/3/movie/'+state.id, {
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxNjMzYjhmZGFlZTg0YWNkNTU1ZWY5MTFmZjIxMSIsInN1YiI6IjY1Mjk5YWU3MWYzZTYwMDBhYzRkODExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eClhzdu5OPTFJvvTOKpoetCAbfc2vVRQA2cNniX3m00', // Replace with your API key
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
            const result = await response.json();
            setMovie(result);
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    if (!movie) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>{"Budget: " + movie.budget}</p>
        {/* Add additional movie details here */}
      </div>
    );
};

export default MovieDetail;