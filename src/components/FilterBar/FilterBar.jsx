import { useState } from "react";
import Modal from "../Modal/Modal";
import styles from "./FilterBar.module.css";

const FilterBar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.filterCOnt}>
      <div className={styles.title}>Movies</div>
      <div>
        <label htmlFor="">
          <select>
            <option value="">All Genre</option>
            <option value="">Drama</option>
            <option value="">Crime</option>
            <option value="">Action</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="">
          <select>
            <option value="">Release Year</option>
            <option value="">Drama</option>
            <option value="">Crime</option>
            <option value="">Action</option>
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="">
          <select>
            <option value="">Rating</option>
            <option value="">Drama</option>
            <option value="">Crime</option>
            <option value="">Action</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={openModal} className={styles.addBtn}>
          Add a Movie
        </button>
      </div>
      {IsOpen && <Modal close={closeModal} />}
    </div>
  );
};

export default FilterBar;
