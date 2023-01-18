//components
import { Button } from "antd";
import { Divider } from "antd";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

export default function Loginsection() {
  return (
    <>
      <Button className="main-button-style" type="primary">
        Login
      </Button>
      <Divider>or</Divider>
      <div>
        <Button className="other-button-style">
          <GoogleOutlined />
          Google
        </Button>
        <Button className="other-button-style">
          <FacebookOutlined /> Facebook
        </Button>
      </div>
    </>
  );
}
