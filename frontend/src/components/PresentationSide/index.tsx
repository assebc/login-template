import { FC } from "react";
import Skate from "../../assets/skate_buddies.svg";
import "./styles.css";

export const PresentationSide: FC = () => {
  return (
    <div className="presentation_side">
      <h1>Login in <br /> and enter our world!</h1>
      <img src={Skate} alt="presentation-image" />
    </div>
  );
};