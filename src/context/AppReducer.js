export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_LIST":
      return {
        ...state,
        movieList: [action.payload, ...state.movieList],
      };
    case "REMOVE_MOVIE_FROM_LIST":
      return {
        ...state,
        movieList: state.movieList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_MOVIE_TO_WATCHED_LIST":
      return {
        ...state,
        movieList: state.movieList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case "MOVE_TO_LIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        movieList: [action.payload, ...state.movieList],
      };
    case "REMOVE_FROM_WATCHED_LIST":
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
