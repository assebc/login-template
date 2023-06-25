import { FC } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import api from "../../services/api";
import "../../styles.css";

export const ForgotPassword: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async ({
    username,
    new_password,
    confirm_password,
  }: any) => {
    if (new_password !== confirm_password)
      return message.error("Passwords do not match!");

    try {
      const response = await api.patch("/forgot-password", {
        username,
        new_password,
        confirm_password,
      });

      if (response.status === 200) {
        message.success("Password changed successfully!", 3);
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
        <Form password={true} children={"CHANGE PASSWORD"} onClick={() => handleSubmit}/>
      </div>
      <Footer />
    </>
  );
};
