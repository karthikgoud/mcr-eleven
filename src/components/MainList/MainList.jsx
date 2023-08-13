import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MainList.module.css";

const MainList = () => {
  const { data } = useData();
  return (
    <div className={styles.mainCont}>
      {data?.movieData?.map((movie) => (
        <MovieCard keys={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MainList;
