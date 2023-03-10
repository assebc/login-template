import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Form: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="form">
      <div className="card_form">
        <h1>LOGIN</h1>

        <div className="textfield">
          <label htmlFor="user">Username</label>
          <input type="text" name="user" placeholder="Insert username" required autoComplete="off"/>
        </div>

        <div className="textfield">
          <label htmlFor="pass">Password</label>
          <input type="password" name="pass" placeholder="Insert password" required autoComplete="off"/>
        </div>

        <div className="no_account">
          <a onClick={() => navigate("forgot-password")}>Forgot password? Click here!</a>
        </div>

        <button 
          className="button_login" 
          name="button_login"
          onClick={() => navigate("/thank-you")}>
          Login
        </button>

        <div className="no_account" style={{marginTop: "12px"}}>
          <a onClick={() => navigate("/register")}>Do not have an account? Register here!</a>
        </div>

      </div>
    </div>
  );
};