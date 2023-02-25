import { FC } from "react";
import "./styles.css";

export const Form: FC = () => {
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
          <a href="register.html">Do not have an account? Register here!</a>
        </div>

        <a className="a_nodef" href="#">
          <button className="button_login" name="button_login" onClick={() => {}}>
            Login
          </button>
        </a>
      </div>
    </div>
  );
};