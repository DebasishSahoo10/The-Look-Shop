/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import "./Login.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import { EmailInput } from "../../components/Inputs/EmailInput";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOGIN, SET_TOKEN, SET_USER } from "../../Redux/AuthSlice";


const Login = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [loginReady, setLoginReady] = useState(false)
  const loginClickHandler = () => {
    setLoginReady(true)
    setTimeout(()=>setError(true), 2000);
  };
  const handleLogout = () => {
    dispatch(SET_LOGIN(false))
    dispatch(SET_TOKEN(null))
  };
  const testLogin = () => {
    setUserInput({ email: "debasishsahoo_@outlook.com", password: "thecreator" })
    setLoginReady(true)
  }
  useEffect(()=> {
    if (auth.isLoggedin) {
      navigate(location?.state?.from?.pathname)
    }
  },[auth.isLoggedin])
  useEffect(() => {
    if (loginReady) {
      (async () => {
        try {
          const authCall = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(userInput),
          });
          const token = await authCall.json()
          token.encodedToken && dispatch(SET_TOKEN(token.encodedToken))
          token.encodedToken && dispatch(SET_LOGIN(true))
          token.encodedToken && dispatch(SET_USER(userInput))
          setLoginReady(false)
        } catch (error) {
          console.log(error);
        }
      })()
    }
  }, [loginReady]);
  return (
    <>
      <Logo />
      <Nav />
      <div className="login-holder">
        {auth.isLoggedin ? (
          <>
            <h2>You are already Logged In</h2>
            <button onClick={() => handleLogout()}>Log Out</button>
          </>
        ) : (
          <>
            <p>Please Login First</p>
            <EmailInput inputHandler={setUserInput}/>
            <PasswordInput inputHandler={setUserInput}/>
            {error && (
              <p>{!auth.authToken ? "the details you entered are incorrect" : ""}</p>
            )}
            <button onClick={() => loginClickHandler()}>Login</button>
            <button onClick={() => testLogin()}>
              Login using Test Credentials
            </button>
            <div>
              <p>Have not signup yet?</p>
              <NavLink to="/signup">
                <button>Sign Up</button>
              </NavLink>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Login