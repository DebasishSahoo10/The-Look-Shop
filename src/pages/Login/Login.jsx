import { useContext, useState } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import { EmailInput } from "../../components/Inputs/EmailInput";


const Login = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const { loginDispatch, authToken, isLoggedin, setIsLoggedin, setAuthToken } =
    useContext(AuthContext);
  const loginClickHandler = () => {
    loginDispatch({ type: "SET_USER", payload: userInput });
    setTimeout(()=>setError(true), 2000);
  };
  const handleLogout = () => {
    loginDispatch({ type: "SET_USER", payload: { email: "", password: "" } });
    setIsLoggedin(false);
    setAuthToken();
  };
  return (
    <>
      <Logo />
      <Nav />
      <div className="login-holder">
        {isLoggedin ? (
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
              <p>{!authToken ? "the details you entered are incorrect" : ""}</p>
            )}
            <button onClick={() => loginClickHandler()}>Login</button>
            <button onClick={() => loginDispatch({ type: "SET_TEST_USER" })}>
              Login using Test Credentials
            </button>
            <div>
              <p>Haven't signup yet?</p>
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