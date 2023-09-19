import { createContext, useEffect, useState, useReducer } from "react";

export const AuthContext = createContext();
const loginHandle = (state, action) => {
  switch (action.type) {
    case "SET_USER" : return {email : action.payload.email, password : action.payload.password}
    case "SET_TEST_USER" : return {email: "debasishsahoo_@outlook.com", password: "thecreator"}
    default: return state
  }
}
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
  const [isLoggedin, setIsLoggedin] = useState(false)

  return <AuthContext.Provider value={{authToken, isLoggedin, setIsLoggedin, setAuthToken}}>{children}</AuthContext.Provider>;
};
