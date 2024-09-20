import * as styles from "./Chats.scss";
import ChatsHeader from "./ChatsHeader";

const Chats = () => {
  return (
    <div className={styles.chats}>
      <ChatsHeader />
      <div className={styles.chats_body}>chats here</div>
    </div>
  );
};

export default Chats;
