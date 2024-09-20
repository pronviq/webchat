import { IUser } from "@/models/userModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: IUser = {
  isAuthenticated: false,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      return { ...action.payload };
    },

    resetUser() {
      return { ...initialState };
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
