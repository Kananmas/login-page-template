import React from "react";
//components
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Inputsection from "./components/Inputsection";
import Loginsection from "./components/Loginsection";
import Signup from "./components/Signup";
//css
import "./index.css";

export default function Signpanel() {
  return (
    <>
      <div className="panel">
        <div className="greeting-user">
          <Title level={3}>Welcome back!</Title>
          <Paragraph>Start managing your finance better and faster</Paragraph>
        </div>
        <Inputsection />
        <Loginsection />
        <Signup />
        <Paragraph className="copyright-text">
          © 2022 ALL RIGHTS RESERVED
        </Paragraph>
      </div>
    </>
  );
}
