import { FC } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import "../../styles.css";

export const Login: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="splitted_screen">
        <PresentationSide />
        <Form login={true} children={"LOGIN"} onClick={() => navigate("/thank-you")}/>
      </div>
      <Footer />
    </>
  );
};
