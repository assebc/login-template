import { FC } from "react";
import { Layout } from "antd";
import "./styles.css";

export const Footer: FC = () => {
  return (
    <Layout.Footer className="footer">
      Created by {" "}
      <a href="https://github.com/assebc" target="_blank">
        @assebc
      </a>
      .
    </Layout.Footer>
  );
};