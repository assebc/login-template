import { FC } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import api from "../../services/api";
import "../../styles.css";

export const Register: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async ({
    username,
    password,
    confirm_password,
  }: any) => {
    if (password !== confirm_password)
      return message.error("Passwords do not match!");

    try {
      const response = await api.post("/register", {
        username,
        password,
        confirm_password,
      });

      if (response.status === 201) {
        message.success("Account created with success!", 3);
        navigate("/");
      }
    } catch (err: any) {
      message.error(err.response.data.error, 3);
    }
  };

  return (
    <>
      <div className="splitted_screen">
        <PresentationSide />
        <Form 
          register={true} 
          children={"REGISTER"} 
          onClick={() => handleSubmit}/>
      </div>
      <Footer />
    </>
  );
};
