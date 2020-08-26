import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../../util/useInput";
import { login } from "../../util/firebaseFunctions";
import Notification from "../commonlyUsed/Notification";

const Login = () => {
  const [message, setMessage] = useState("");
  const email = useInput("");
  const password = useInput("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let res = await login(email.value, password.value);

      history.push(`/profile/${res.user.uid}`);
    } catch (err) {
      setMessage(err.message);
      console.log(err);
    }
  };

  return (
    <div className="signUpMainDiv" style={{ color: "white" }}>
      <Notification message={message} />
      <h1 className="heavyFont signUpHeader">Login</h1>
      <form className="loginForm" onSubmit={handleLogin}>
        <div className="input">
          <label className="labelInput text-white">Email: </label>
          <input type="text" placeholder="email" required {...email} />
          <label className="labelInput text-white">Password: </label>
          <input
            type="password"
            placeholder="password"
            required
            {...password}
          />
          <input type="submit" className="Btn-create submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
