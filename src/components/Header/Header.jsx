import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerCompo}>
      <div className={styles.logo}>IMDB</div>
      <div>
        <input
          type="text"
          placeholder="Search movies by title,cast and director..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.navitems}>
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/watchlist">Watch List</NavLink>
        <NavLink to="/starred">Starred Movies</NavLink>
      </div>
    </div>
  );
};

export default Header;
