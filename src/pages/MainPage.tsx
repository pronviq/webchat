import ChatContainer from "@/components/chat/ChatContainer";
import Chats from "@/components/chat/Chats";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { initialState, resetUser, setUser } from "@/redux/userSlice";
import AuthService from "@/services/AuthService";
import MessageService from "@/services/MessageService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./MainPage.scss";

const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <Chats />
      <ChatContainer />
    </div>
  );
};

export default MainPage;
