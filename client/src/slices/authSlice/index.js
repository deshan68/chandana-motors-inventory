import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isAuthenticated: user ? user.isAuth : null,
  userName: null,
  password: null,
  errorMessage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, actions) => {
      if (
        actions.payload.userName === "admin" &&
        actions.payload.password === "key123"
      ) {
        state.isAuthenticated = true;
        state.errorMessage = null;
      } else {
        state.errorMessage = "Username or Password is Incorrect";
      }
    },
    resetState: (state) => {
      state = {
        isAuthenticated: false,
        userName: null,
        password: null,
        errorMessage: null,
      };
    },
  },
});

export const { setIsAuthenticated } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
