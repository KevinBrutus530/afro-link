import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../../util/useInput";
import { login } from "../../util/firebaseFunctions";
import { AuthContext } from "../../providers/AuthContext"
// import axios from 'axios';


const Login = () => {
  // let API = getAPI();
  const {
      token,
      currentUser,
      loading
  } = useContext(AuthContext)
  const email = useInput("");
  const password = useInput("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email.value, password.value);
      history.push(`/profile/${currentUser.uid}`);
    } catch (err) {
      console.log(err);
      alert("Error Logging In. Please Try Again Later")
    }
  };

  return (
    <div className="signUpMainDiv" style={{ color: "white" }}>
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
