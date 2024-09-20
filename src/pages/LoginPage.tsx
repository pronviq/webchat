import { useAppDispatch } from "@/hooks/useRedux";
import { IUser } from "@/models/userModel";
import { setUser } from "@/redux/userSlice";
import AuthService from "@/services/AuthService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const login = async () => {
    const data = await AuthService.login({ username, password });

    if (data.status === 200) {
      const payload: IUser = {
        isAuthenticated: true,
        username,
      };

      navigate("/");
      dispatch(setUser(payload));
    } else {
      console.log(data);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;
