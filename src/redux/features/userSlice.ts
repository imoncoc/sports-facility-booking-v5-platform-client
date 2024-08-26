import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
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
  },
});

export const { setToken, setUser } = userSlice.actions;
export default userSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.user;
export const useCurrentToken = (state: RootState) => state.user;
