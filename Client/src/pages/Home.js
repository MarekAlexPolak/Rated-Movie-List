import React from "react";

const Home = () => {
  const movies = [
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
    { title: "Movie Title", rating: "6/10" },
  ];

  return (
    <div className="home-main">
      <h2>Your Rated Movies</h2>
      <div className="home-movies-container">
        {movies.map((movie) => (
          <div className="home-movies">
            <p>Title: {movie.title}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
