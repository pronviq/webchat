import AuthService from "@/services/AuthService";
import * as styles from "./Header.scss";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        header here
        <button onClick={() => AuthService.logout()}>logout</button>
      </div>
    </div>
  );
};

export default Header;
