import { Input } from "antd";
import Link from "antd/es/typography/Link";
import { MailOutlined } from "@ant-design/icons";

export default function Inputsection() {
  return (
    <>
      <Input placeholder="you@example.com" suffix={<MailOutlined />} />
      <Input.Password
        style={{ marginTop: "12px" }}
        placeholder="At least 8 characters"
      />
      <div style={{ margin: "4px", float: "right" }}>
        <Link>
          <strong>Forgot password?</strong>
        </Link>
      </div>
    </>
  );
}
