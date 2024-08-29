import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
  token: "",
  user: {},
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
