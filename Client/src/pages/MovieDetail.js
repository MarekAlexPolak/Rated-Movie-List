import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
    let { state } = useLocation();
    const [movie, setMovie] = useState(null);
    //console.log(state);

    const handleUrlChange = (data) => {
      console.log(data);
      window.location.reload();
    };
    
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
            //console.log(result);
          } else {
            console.error('Error fetching data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();
  
      // Listen for changes in the URL
      window.addEventListener('popstate', handleUrlChange);
      console.log(window.location.pathname);
      return () => {
        // Cleanup: remove the event listener when the component unmounts
        window.removeEventListener('popstate', handleUrlChange);
      };
    }, [window.location.pathname]);
  
    if (!movie) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='movie-detail-main'>
        <div className='movie-detail-container' >
          <h2>{movie.title}</h2>
          <p>{movie.production_companies[0].name}</p>
          <p>{movie.overview}</p>
          <p>{"Budget: " + movie.budget + " Revenue: " + movie.revenue}</p>
          <p>{movie.release_date}</p>
          {/* Add additional movie details here */}
        </div>
      </div>
    );
};

export default MovieDetail;