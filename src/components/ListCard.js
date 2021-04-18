import React, { useContext } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import data from '../config.json'

export const ListCard = ({ movie }) => {
  const {
    addMovieToMovieList,
    addMovieToWatched,
    movieList,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = movieList.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const movieListDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`${data.ImageUrl}${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={movieListDisabled}
            onClick={() => addMovieToMovieList(movie)}
          >
           Film Listeme Ekle
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
           İzlediklerime Ekle
          </button>
        </div>
      </div>
    </div>
  );
};
