import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../util/useInput";
import { login } from "../util/firebaseFunctions";

const Login = () => {
  const email = useInput("");
  const password = useInput("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      history.push("/main");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ color: "white" }}>
      <h1>Login</h1>
      <form className="loginForm" onSubmit={handleLogin}>
        <div className="input">
          <label>Email: </label>
          <input type="text" placeholder="email" required {...email} />
          <label>Password: </label>
          <input
            type="password"
            placeholder="password"
            required
            {...password}
          />
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
