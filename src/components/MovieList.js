import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const { movieList } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Film Listem</h1>

          <span className="count-pill">
            {movieList.length} {movieList.length === 1 ? "Film" : "Filmler"}
          </span>
        </div>

        {movieList.length > 0 ? (
          <div className="movie-grid">
            {movieList.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="movieList" />
            ))}
          </div>
        ) : (
          <>
          <h2 className="no-movies">Listenizde film yok!</h2>
          <h2 className="no-movies">Tüm Filmler sayfasından ekleyebilirsiniz!</h2>
          </>
        )}
      </div>
    </div>
  );
};
