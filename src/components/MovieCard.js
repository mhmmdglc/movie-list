import React from "react";
import { MovieControls } from "./MovieControls";
import data from './../../src/config.json'

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`${data.ImageUrl}${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
