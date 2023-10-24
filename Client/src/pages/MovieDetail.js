import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
  let { state } = useLocation();
  const [movie, setMovie] = useState(null);
  //console.log(state);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + state.id,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDQxNjMzYjhmZGFlZTg0YWNkNTU1ZWY5MTFmZjIxMSIsInN1YiI6IjY1Mjk5YWU3MWYzZTYwMDBhYzRkODExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eClhzdu5OPTFJvvTOKpoetCAbfc2vVRQA2cNniX3m00", // Replace with your API key
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const result = await response.json();
          setMovie(result);
          //console.log(result);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [window.location.pathname]);

  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleUserRating = async (event) => {
    event.preventDefault();
    console.log(movie.id);
    // const ratingInput = rating;

    // try {
    //   const { data } = await addRating({
    //     variables: {
    //       ratingMovieInput: {
    //         movie_id: movie.id,
    //         rating: ratingInput,
    //       },
    //     },
    //   });
    //   //Auth.login(data.addUser.token);

    //   // Redirect to the home page after successful signup
    //   navigate("/"); // Use navigate to redirect
    // } catch (err) {
    //   console.error(err);
    //   // add signup error message later
    // }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail-main">
      <div className="movie-detail-container">
        <h2>{movie.title}</h2>
        <p>{movie.production_companies[0].name}</p>
        <p>{movie.overview}</p>
        <p>{"Budget: " + movie.budget + " Revenue: " + movie.revenue}</p>
        <p>{movie.release_date}</p>
        <Form onSubmit={handleUserRating}>
          <Form.Group controlId="username">
            <Form.Control
              type="text"
              placeholder="Rate"
              value={rating}
              onChange={(event) => setRating(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Rate
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default MovieDetail;
