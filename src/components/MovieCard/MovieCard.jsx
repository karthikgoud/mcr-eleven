import { NavLink } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { useData } from "../../context/DataContext";

const MovieCard = ({ movie }) => {
  const { dispatch } = useData();
  const { imageURL, summary, title, id, watchList, starred } = movie;

  function toggleWatchList(e, id) {
    e.stopPropagation();
    dispatch({ type: "TOGGLE_WATCHLIST", payload: id });
  }

  function toggleStar(e, id) {
    e.stopPropagation();
    dispatch({ type: "TOGGLE_STAR", payload: id });
  }

  return (
    <NavLink to={`/movie/${id}`} className={styles.link}>
      <div className={styles.cardCont}>
        <img src={imageURL} alt={title} />
        <h2>{title}</h2>
        <p className={styles.ellipse}>{summary}</p>
        <div className={styles.btnCont}>
          <button onClick={(e) => toggleStar(e, id)}>
            {starred ? "Starred" : "star"}
          </button>
          <button onClick={(e) => toggleWatchList(e, id)}>
            {watchList ? "Added to watchlist" : "Add to watchlist"}
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default MovieCard;
