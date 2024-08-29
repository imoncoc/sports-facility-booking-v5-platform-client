import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TUser = {
  address?: string;
  email?: string;
  name?: string;
  phone?: string;
  role: string;
  _id?: string;
  userId?: string;
  iat?: number;
  exp?: number;
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TAuthState = {
  token: null,
  user: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setToken, setUser, logout } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = (state: RootState): any => state.user;
export const useCurrentToken = (state: RootState): any => state.user;
