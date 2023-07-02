import { FC, useState } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import api from "../../services/api";
import "../../styles.css";

export const Register: FC = () => {
  const navigate = useNavigate();
  const [userCallBack, setUserCallBack] = useState("");
  const [pswdCallBack, setPswdCallBack] = useState("");
  const [confirmCallBack, setConfirmCallBack] = useState("");

  const handleSubmit = async () => {
    if (pswdCallBack !== confirmCallBack)
      return message.error("Passwords do not match!");

    try {
      const response = await api.post("/register", {
        username: userCallBack,
        password: pswdCallBack,
        confirm_password: confirmCallBack
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
          username={setUserCallBack}
          pass={setPswdCallBack}
          confirm={setConfirmCallBack}
          onClick={() => handleSubmit()}
        />
      </div>
      <Footer />
    </>
  );
};
