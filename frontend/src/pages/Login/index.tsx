import { FC } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../config";
import api from "../../services/api";
import "../../styles.css";
import { message } from "antd";

interface ILoginPayLoad {
  username: string;
  password: string;
}

export const Login: FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async ({ username, password }: ILoginPayLoad) => {
    try {
      const response = await api.post("login", {
        username,
        password,
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
          onClick={() => handleSubmit}
        />
      </div>
      <Footer />
    </>
  );
};
