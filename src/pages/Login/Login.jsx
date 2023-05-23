import { useContext, useState } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { AuthContext } from "../../contexts/AuthContext";
import "./Login.css";

export const Login = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const { loginDispatch, authToken, isLoggedin, setIsLoggedin, setAuthToken } = useContext(AuthContext);
  const loginClickHandler = () => {
    loginDispatch({ type: "SET_USER", payload: userInput });
    setError(true);
  };
  const handleLogout = () => {
    loginDispatch({type : "SET_USER", payload : {email: "", password: ""}})
    setIsLoggedin(false)
    setAuthToken()
  }
  return (
    <>
      <Logo />
      <Nav />
      <div className="login-holder">
        {isLoggedin ? (
          <>
            <h2>You are already Logged In</h2>
            <button onClick={()=>handleLogout()}>Log Out</button>
          </>
        ) : (
          <>
            <p style={{ alignSelf: "center" }}>Please Login First</p>
            <div>
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                name="email-input"
                id="email"
                onChange={(e) =>
                  setUserInput((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div>
              <label htmlFor="password">Password :</label>
              <input
                type="text"
                name="password-input"
                id="password"
                onChange={(e) =>
                  setUserInput((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
            </div>
            {error && (
              <p>{!authToken ? "the details you entered are incorrect" : ""}</p>
            )}
            <button onClick={() => loginClickHandler()}>Login</button>
            <button onClick={() => loginDispatch({ type: "SET_TEST_USER" })}>
              Login using Test Credentials
            </button>
          </>
        )}
      </div>
    </>
  );
};
