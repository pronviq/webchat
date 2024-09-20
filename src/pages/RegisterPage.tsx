import { useAppDispatch } from "@/hooks/useRedux";
import { IUser } from "@/models/userModel";
import { setUser } from "@/redux/userSlice";
import AuthService from "@/services/AuthService";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState<number>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const register = async () => {
    console.log(username, password, age);

    const data = await AuthService.registration({ username, password, age });

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
      <input
        type="text"
        value={age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(e.target.value))}
      />
      <button onClick={register}>register</button>
    </div>
  );
};

export default RegisterPage;
