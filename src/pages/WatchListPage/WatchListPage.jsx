import { useData } from "../../context/DataContext";
import styles from "./WatchListPage.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";

const WatchListPage = () => {
  const { data } = useData();

  const watchedList = data.movieData.filter((movie) => movie.watchList);

  console.log(watchedList);

  return (
    <div className={styles.mainCont}>
      {watchedList?.map((movie) => (
        <MovieCard keys={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default WatchListPage;
