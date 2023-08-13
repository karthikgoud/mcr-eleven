import Header from "../Header/Header";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return (
    <div className={styles.wrapperCont}>
      <div className={styles.headerCont}>
        <Header />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
};

export default Wrapper;
