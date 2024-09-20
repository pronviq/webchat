import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as classes from "./App.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";
import RegisterPage from "../RegisterPage";
import GuestPage from "@/pages/GuestPage";
import { useQuery } from "react-query";
import $api from "@/api/AxiosApi";
import AuthService from "@/services/AuthService";
import { setUser } from "@/redux/userSlice";
import { IUser } from "@/models/userModel";
import Container from "./Container";
import NotFound404 from "../404";

export const App = () => {
  const user = useAppSelector((s) => s.userReducer);
  const dispatch = useAppDispatch();
  const { isLoading, error, data } = useQuery({
    queryKey: ["checkAuth"],
    refetchOnWindowFocus: false,

    queryFn: async () => {
      const response = await AuthService.refresh();
      if (response.status == 200) {
        const user: IUser = {
          isAuthenticated: true,
          username: response.username,
        };
        dispatch(setUser(user));
        return user;
      }
    },
  });

  if (isLoading) return <></>;
  if (error) return <div>Error</div>;

  return (
    <div className={classes.app}>
      <BrowserRouter>
        {user.isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<MainPage />} />
            </Route>
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegisterPage />} />
            <Route path="/" element={<GuestPage />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};
