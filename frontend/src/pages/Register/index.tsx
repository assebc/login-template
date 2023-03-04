import { FC } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import { Footer } from "../../components/Footer";
import "../../styles.css";

export const Register: FC = () => {

  return (
    <>
      <div className="splitted_screen">
        <PresentationSide />
        <Form />
      </div>
      <Footer />
    </>
  );
};
