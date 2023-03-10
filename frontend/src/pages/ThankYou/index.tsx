import { FC } from "react";
import Skate from "../../assets/skate_buddies.svg";
import "../../styles.css";

export const ThankYou: FC = () => {

  return (
    <div className="main_login">
        <div className="left_login">
            <h1>Welcome in<br /> this is our world!</h1>
            <img src={Skate} alt="presentation-image" />
        </div>
    </div>
  );
};
