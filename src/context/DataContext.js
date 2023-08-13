import { createContext, useContext, useEffect, useReducer } from "react";
import { movies } from "../constants/data";

export const DataContext = createContext();

const getLocalData = () => {
  let newMovieData = localStorage.getItem("movieList");
  if (!newMovieData) {
    return movies;
  } else {
    return JSON.parse(newMovieData);
  }
};

const initialState = {
  movieData: getLocalData(),
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_MOVIE":
      return { ...state, movieData: [...state.movieData, payload] };

    case "TOGGLE_WATCHLIST":
      const toggledMovie = [...state.movieData].map((movie) =>
        movie.id == payload
          ? movie.watchList
            ? { ...movie, watchList: false }
            : { ...movie, watchList: true }
          : movie
      );
      return { ...state, movieData: [...toggledMovie] };

    case "TOGGLE_STAR":
      const toggledstar = [...state.movieData].map((movie) =>
        movie.id == payload
          ? movie.starred
            ? { ...movie, starred: false }
            : { ...movie, starred: true }
          : movie
      );
      return { ...state, movieData: [...toggledstar] };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("movieList", JSON.stringify(data.movieData));
  }, [data.movieData]);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
