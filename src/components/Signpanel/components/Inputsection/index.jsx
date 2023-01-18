import { Input } from "antd";
import Link from "antd/es/typography/Link";
import { MailOutlined } from "@ant-design/icons";

export default function Inputsection() {
  return (
    <>
      <Input placeholder="you@example.com" suffix={<MailOutlined />} />
      <Input.Password
        className="input-password"
        placeholder="At least 8 characters"
      />
      <div className="password-recovery">
        <Link>
          <strong>Forgot password?</strong>
        </Link>
      </div>
    </>
  );
}
