import { useParams } from "react-router";
import styles from "./MovieDetailPage.module.css";
import { useData } from "../../context/DataContext";

const MovieDetailPage = () => {
  const { Id } = useParams();
  const { data } = useData();
  const { dispatch } = useData();

  function toggleWatchList(e, id) {
    e.stopPropagation();
    dispatch({ type: "TOGGLE_WATCHLIST", payload: id });
  }

  function toggleStar(e, id) {
    e.stopPropagation();
    dispatch({ type: "TOGGLE_STAR", payload: id });
  }

  const selectedMovie = data.movieData.find((movie) => movie.id == Id);

  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
    watchList,
    starred,
  } = selectedMovie;
  return (
    <div className={styles.detailPage}>
      <div>
        <img src={imageURL} alt={title} />
      </div>
      <div className={styles.detailInfo}>
        <h2>{title}</h2>
        <p>{summary}</p>
        <div>Year:{year}</div>
        <div>
          Genre:
          {genre.map((item) => (
            <span> {item},</span>
          ))}
        </div>
        <div>Rating: {rating}</div>
        <div>Director: {director}</div>
        <div>Writer: {writer}</div>
        <div>Cast: {cast}</div>
        <div className={styles.btnCont}>
          <button onClick={(e) => toggleStar(e, id)}>
            {starred ? "Starred" : "star"}
          </button>
          <button onClick={(e) => toggleWatchList(e, id)}>
            {watchList ? "Added to WishList" : "Add to WishList"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
