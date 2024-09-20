import { IMessage } from "@/models/messageModel";
import * as styles from "./Message.scss";
import { useAppSelector } from "@/hooks/useRedux";

const Message = ({ message }: { message: IMessage }) => {
  const user = useAppSelector((us) => us.userReducer);

  return (
    <div className={`${styles.message} ${message.ownerUsername == user.username && styles.my}`}>
      {message.ownerUsername == user.username
        ? message.text
        : `${message.ownerUsername}: ${message.text}`}
    </div>
  );
};

export default Message;
