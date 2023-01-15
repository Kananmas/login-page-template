//components
import { Button } from "antd";
import { Divider } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

const mainButtonStyle = {
  width: "100%",
};

const otherButtonsStyle = {
  width: "49%",
  marginRight: "1%",
};

export default function Loginsection() {
  return (
    <>
      <Button style={mainButtonStyle} type="primary">
        Login
      </Button>
      <Divider>or</Divider>
      <div>
        <Button style={otherButtonsStyle}>
          <GoogleOutlined />
          Google
        </Button>
        <Button style={otherButtonsStyle}>
          <FacebookOutlined /> Facebook
        </Button>
      </div>
    </>
  );
}
