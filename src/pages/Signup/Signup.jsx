import { useState } from "react";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import { EmailInput } from "../../components/Inputs/EmailInput";

export const Signup = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleSignup = () => {
    if (userInput.email.length === 0 || userInput.password.length === 0) {
      setError(true);
    } else {
      (async () => {
        try {
          const signupCall = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(userInput),
          });
          if ((await signupCall.status) === 422) {
            setError(true);
            setServerError("This Email ID already exists, try a different one");
          } else {
            setIsSignup(true);
            setError(false);
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };
  return (
    <>
      <Logo />
      <Nav />
      <div className="login-holder">
        <EmailInput inputHandler={setUserInput} />
        <PasswordInput inputHandler={setUserInput} />
        <button onClick={() => handleSignup()}>Sign Up</button>
        {isSignup && <p>You have sucessfully signed up. now you can Login</p>}
        {error && serverError.length === 0 && (
          <p>sadly empty inputs don't work here</p>
        )}
        {error && <p>{serverError}</p>}
      </div>
    </>
  );
};
