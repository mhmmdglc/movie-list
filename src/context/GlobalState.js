import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  movieList: localStorage.getItem("movieList")
    ? JSON.parse(localStorage.getItem("movieList"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(state.movieList));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addMovieToMovieList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_LIST", payload: movie });
  };

  const removeMovieFromMovieList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_LIST", payload: id });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHED_LIST", payload: movie });
  };

  const moveToMovieList = (movie) => {
    dispatch({ type: "MOVE_TO_LIST", payload: movie });
  };

  const removeFromWatched = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED_LIST", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        movieList: state.movieList,
        watched: state.watched,
        addMovieToMovieList,
        removeMovieFromMovieList,
        addMovieToWatched,
        moveToMovieList,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
