import { IMessage } from "@/models/messageModel";
import * as styles from "./ChatBody.scss";
import Message from "./messages/Message";

const ChatBody = () => {
  const messages: IMessage[] = [
    {
      chatId: 1,
      dispatchDate: new Date(),
      id: 1,
      ownerId: 1,
      ownerUsername: "max",
      text: "hello brother",
    },
    { chatId: 1, dispatchDate: new Date(), id: 1, ownerId: 1, ownerUsername: "admin", text: "hi" },
    {
      chatId: 1,
      dispatchDate: new Date(),
      id: 1,
      ownerId: 1,
      ownerUsername: "max",
      text: "how are you",
    },
    {
      chatId: 1,
      dispatchDate: new Date(),
      id: 1,
      ownerId: 1,
      ownerUsername: "admin",
      text: "thats good",
    },
  ];

  return (
    <div className={styles.chatbody}>
      <div className={styles.messages}>
        {messages.map((message) => (
          <Message message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatBody;
