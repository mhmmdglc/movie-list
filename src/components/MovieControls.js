import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromMovieList,
    addMovieToWatched,
    moveToMovieList,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "movieList" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            Ekle
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromMovieList(movie.id)}
          >
            Sil
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToMovieList(movie)}>
            Ekle
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            Sil
          </button>
        </>
      )}
    </div>
  );
};
