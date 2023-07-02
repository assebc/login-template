import { FC, useState } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../config";
import api from "../../services/api";
import "../../styles.css";
import { message } from "antd";

export const Login: FC = () => {
  const navigate = useNavigate();
  const [userCallBack, setUserCallBack] = useState("");
  const [pswdCallBack, setPswdCallBack] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await api.post("/", {
        username: userCallBack,
        password: pswdCallBack
      });

      if (response.status == 200) {
        localStorage.setItem(ACCESS_TOKEN_KEY, response.data);
        navigate("/thank-you");
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
          login={true} 
          children={"LOGIN"}
          username={setUserCallBack}
          pass={setPswdCallBack}
          confirm={() => undefined}
          onClick={() => handleSubmit()}
        />
      </div>
      <Footer />
    </>
  );
};
