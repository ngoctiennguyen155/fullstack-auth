import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../Api/userApi";

// user login
export const fetchUser = createAsyncThunk(
  "auth/login",
  async (data, thunkApi) => {
    const response = await userApi.Login(data);
    localStorage.setItem("token", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") || "",
    userInfo: localStorage.getItem("user") || {},
  },
  reducers: {
    logout: (state) => {
      state.isLogin = false;
      state.token = "";
      state.userInfo = {};
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.token = action.payload.token;
      state.userInfo = action.payload.user;
    },
  },
});

const { actions, reducer } = userSlice;

export const { logout } = actions;
export default reducer;
