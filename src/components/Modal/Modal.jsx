import { useState } from "react";
import styles from "./Modal.module.css";
import { useData } from "../../context/DataContext";

const Modal = ({ close }) => {
  const { dispatch } = useData();
  const [newMovie, setNewMovie] = useState({
    title: "",
    year: null,
    genre: [],
    rating: null,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  function handleAdd(e, newMovie) {
    e.preventDefault();
    dispatch({ type: "ADD_MOVIE", payload: newMovie });
    setNewMovie({
      title: "",
      year: null,
      genre: [],
      rating: null,
      director: "",
      writer: "",
      cast: [],
      summary: "",
      imageURL: "",
    });
    close();
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form className={styles.myForm}>
          <label htmlFor="name">Name </label>
          <input
            type="text"
            id="name"
            value={newMovie.title}
            onChange={(e) =>
              setNewMovie((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          {/*  */}
          <label htmlFor="summary">Summary </label>
          <input
            type="text"
            id="summary"
            value={newMovie.summary}
            onChange={(e) =>
              setNewMovie((prev) => ({ ...prev, summary: e.target.value }))
            }
          />
          {/*  */}
          <label htmlFor="year">Year </label>
          <input
            type="number"
            id="year"
            value={newMovie.year}
            onChange={(e) =>
              setNewMovie((prev) => ({ ...prev, year: e.target.value }))
            }
          />
          {/*  */}
          <label htmlFor="cast">Cast </label>
          <input
            type="text"
            id="cast"
            value={newMovie.cast}
            onChange={(e) =>
              setNewMovie((prev) => ({
                ...prev,
                cast: [e.target.value],
              }))
            }
          />
          {/*  */}
          <label htmlFor="genre">Genre </label>
          <input
            type="text"
            id="genre"
            value={newMovie.genre}
            onChange={(e) =>
              setNewMovie((prev) => ({
                ...prev,
                genre: [e.target.value],
              }))
            }
          />
          {/*  */}
          <label htmlFor="rating">Rating </label>
          <input
            type="number"
            id="rating"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie((prev) => ({ ...prev, rating: e.target.value }))
            }
          />
          {/*  */}
          <label htmlFor="director">Director </label>
          <input
            type="text"
            id="director"
            value={newMovie.director}
            onChange={(e) =>
              setNewMovie((prev) => ({ ...prev, director: e.target.value }))
            }
          />
          {/*  */}
          <label htmlFor="writer">Writer </label>
          <input
            type="text"
            id="writer"
            value={newMovie.writer}
            onChange={(e) =>
              setNewMovie((prev) => ({ ...prev, writer: e.target.value }))
            }
          />
          {/*  */}
          <label htmlFor="imageurl">imageURL </label>
          <input
            type="text"
            id="imageurl"
            value={newMovie.imageURL}
            onChange={(e) =>
              setNewMovie((prev) => ({ ...prev, imageURL: e.target.value }))
            }
          />
          <button
            className={styles.closeBtn}
            onClick={(e) => handleAdd(e, newMovie)}
          >
            Add
          </button>
          <button className={styles.closeBtn} onClick={close}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
