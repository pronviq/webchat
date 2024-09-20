import ChatBody from "./ChatBody";
import * as styles from "./ChatContainer.scss";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";

const ChatContainer = () => {
  return (
    <div className={styles.chatcontainer}>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default ChatContainer;
