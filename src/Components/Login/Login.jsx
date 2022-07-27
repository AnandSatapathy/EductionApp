import React from "react";
import "./login.css";
import { VscArrowLeft } from "react-icons/vsc";
const style = { fontSize: "1em",};
const Login = () => {
  return (
    <div className="container">
      <div className="upper_part">
        <div className="arrow">
          <VscArrowLeft size={30} style={style} />
        </div>
        <div className="text_design">
          <h3>LEARN FROM THE BEST AT YOUR</h3>
          <h3>OWN PACE</h3>
        </div>
      </div>
      <div className="form">
        <div className="input-container">
          <label>Email/Mobile Number</label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <button >Login</button>
        </div>
        <div className="footer-container">
          <p>Having issues in login?</p>
          <p1>Forget password</p1>
        </div>
      </div>
    </div>
  );
};

export default Login;
