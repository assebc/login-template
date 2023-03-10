import { FC } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import "../../styles.css";

export const Register: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="splitted_screen">
        <PresentationSide />
        <Form register={true} children={"REGISTER"} onClick={() => navigate("/")}/>
      </div>
      <Footer />
    </>
  );
};
