import { Outlet } from "react-router-dom";
import * as styles from "./Container.scss";
import Header from "./Header";

const Container = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.container_body}>
        <div className={styles.container_bodyIn}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Container;
