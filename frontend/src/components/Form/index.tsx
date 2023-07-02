import { FC, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { Form as AntdForm, Input } from "antd";
import "./styles.css";

type LayoutType = 'vertical';
interface IFormProps {
  children: ReactNode;
  login?: boolean;
  register?: boolean;
  password?: boolean;
  onClick: () => void;
  username: Dispatch<SetStateAction<string>>;
  pass: Dispatch<SetStateAction<string>>;
  confirm: Dispatch<SetStateAction<string>>;
}
export const Form: FC<IFormProps> = ({
  children,
  login,
  register,
  password,
  onClick,
  username,
  pass,
  confirm
}) => {
  const [form] = AntdForm.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
}) => {

  const navigate = useNavigate();

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <AntdForm
      layout={formLayout}
      form={form}
      initialValues={{layout: formLayout}}
      className="form"
    >
      <div className="card_form">

        <h1>{children}</h1>

        <div className="textfield">
          <label htmlFor="user">Username</label>
          <input type="text" name="username" placeholder="Insert username" onChange={(event) => username(event.target.value)} required autoComplete="off" />
        </div>

        { register || login ? (
          <div className="textfield">
            <label htmlFor="password">Password</label>
            <Input type="password" name="password" placeholder="Insert password" onChange={(event) => pass(event.target.value)} required autoComplete="off" />
          </div>
        ) : (
          <div className="textfield"> 
            <label htmlFor="password">New Password</label>
            <Input type="password" name="password" placeholder="Insert password" onChange={(event) => pass(event.target.value)} required autoComplete="off" />
          </div>
        )}
        
        { register || password ? (
          <div className="textfield">
            <label htmlFor="password">Confirm Password</label>
            <Input type="password" name="confirm_password" placeholder="Confirm password" onChange={(event) => confirm(event.target.value)} required autoComplete="off" />
          </div>
        ) : undefined }

        <AntdForm.Item className="no_account">
          { login ? (
            <a
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password? Click here!
            </a>
          ) : undefined}
        </AntdForm.Item>

        <button
          className="button_login"
          name="button_login"
          onClick={onClick}
        >
          {children}
        </button>

        { login || password ? (
          <AntdForm.Item className="no_account" style={{marginTop: "12px"}}>
            <a onClick={() => navigate("/register")}>
              Do not have an account? Register here!
            </a>
          </AntdForm.Item>
        ) : undefined }

        { register ? (
          <AntdForm.Item className="no_account" style={{marginTop: "12px"}}>
          <a 
            onClick={() => navigate("/")}
          >
            Already have and account? Please login here!
          </a>
          </AntdForm.Item>
        ) : undefined }
        
      </div>
    </AntdForm>

  );
};