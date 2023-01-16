import { Input } from "antd";
import Link from "antd/es/typography/Link";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

export default function Inputsection() {
  return (
    <>
      <Input placeholder="you@example.com" suffix={<MailOutlined />} />
      <Input.Password
        style={{ marginTop: "12px" }}
        placeholder="At least 8 characters"
        suffix={<LockOutlined style={{ float: "left" }} />}
      />
      <div style={{ margin: "4px", float: "right" }}>
        <Link>
          <strong>Forgot password?</strong>
        </Link>
      </div>
    </>
  );
}
