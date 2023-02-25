import { FC } from "react";
import { PresentationSide } from "../../components/PresentationSide";
import { Form } from "../../components/Form";
import "../../styles.css";

export const Login: FC = () => {

  return (
    <div className="splitted_scrren">
      <PresentationSide />
      <Form />
    </div>
  );
};
