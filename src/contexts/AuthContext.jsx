import { createContext, useEffect, useState, useReducer } from "react";
import { useLocation, useNavigate } from "react-router";

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
  const [loginState, loginDispatch] = useReducer(loginHandle, {email : "", password : ""})
  const [isLoggedin, setIsLoggedin] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    (async () => {
      try {
        const authCall = await fetch("/api/auth/login", {
          method: "POST",
          body: JSON.stringify(loginState),
        });
        const token = await authCall.json()
        token.encodedToken && setAuthToken(token.encodedToken)
        token.encodedToken && setIsLoggedin(true)
        token.encodedToken && navigate(location?.state?.from?.pathname)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [loginState, navigate, location?.state?.from?.pathname]);
  return <AuthContext.Provider value={{authToken, loginDispatch, isLoggedin, setIsLoggedin, setAuthToken}}>{children}</AuthContext.Provider>;
};
