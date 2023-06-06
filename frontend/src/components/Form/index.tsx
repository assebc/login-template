import { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface IFormProps {
  children: ReactNode;
  login?: boolean;
  register?: boolean;
  password?: boolean;
  onClick: () => void;
}

export const Form: FC<IFormProps> = ({
  children,
  login,
  register,
  password,
  onClick,
}) => {
  const navigate = useNavigate();

  return (
    <div className="form">
      <div className="card_form">
        <h1>{children}</h1>

        <div className="textfield">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Insert username"
            required
            autoComplete="off"
          />
        </div>

        <div className="textfield">
          {register || login ? (
            <label htmlFor="pass">Password</label>
          ) : (
            <label htmlFor="pass">New Password</label>
          )}
          <input
            type="password"
            name="password"
            placeholder="Insert password"
            required
            autoComplete="off"
          />
        </div>

        {register || password ? (
          <div className="textfield">
            <label htmlFor="pass">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              required
              autoComplete="off"
            />
          </div>
        ) : undefined}

        <div className="no_account">
          {login ? (
            <a onClick={() => navigate("/forgot-password")}>
              Forgot password? Click here!
            </a>
          ) : undefined}
          {register ? (
            <a onClick={() => navigate("/")}>
              Already have and account? Please login here!
            </a>
          ) : undefined}
        </div>

        <button className="button_login" name="button_login" onClick={onClick}>
          {children}
        </button>

        {login || password ? (
          <div className="no_account" style={{ marginTop: "12px" }}>
            <a onClick={() => navigate("/register")}>
              Do not have an account? Register here!
            </a>
          </div>
        ) : undefined}
      </div>
    </div>
  );
};
