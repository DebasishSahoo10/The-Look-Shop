import { useState } from "react";

export const PasswordInput = ({inputHandler}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div>
      <label htmlFor="password">Password :</label>
      <div className="password-input-container">
        <input
          type={passwordVisible ? "text" : "password"}
          name="password-input"
          id="password"
          onChange={(e) =>
            inputHandler((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <p
          className="password-toggle"
          onClick={() => togglePasswordVisibility()}
        >
          {passwordVisible ? "🔓" : "🔒"}
        </p>
      </div>
    </div>
  );
};
