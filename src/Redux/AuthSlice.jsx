import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: null,
  user: { email: "", password: "" },
  isLoggedin: false,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers : {
    SET_USER : (state, action) => {
        state.user = action.payload
    },
    SET_LOGIN : (state,action) => {
        state.isLoggedin = action.payload
    },
    SET_TOKEN : (state, action) => {
        state.authToken = action.payload
    }
  }
});
export const SET_USER = createAction('auth/SET_USER', (user) => ({
    payload : user
}))
export const SET_LOGIN = createAction('auth/SET_LOGIN', (login) => ({
    payload : login
}))
export const SET_TOKEN = createAction('auth/SET_TOKEN', (token) => ({
    payload : token
}))