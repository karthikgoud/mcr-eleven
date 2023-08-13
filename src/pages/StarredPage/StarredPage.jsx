import { useData } from "../../context/DataContext";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./StarredPage.module.css";

const StarredPage = () => {
  const { data } = useData();

  const watchedList = data.movieData.filter((movie) => movie.starred);

  return (
    <div className={styles.mainCont}>
      {watchedList?.map((movie) => (
        <MovieCard keys={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default StarredPage;
