//components
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";

export default function Signup() {
  return (
    <>
      <div className="sign-up-link">
        <Paragraph>
          {" "}
          Don't have an acount? <Link>Sign up</Link>
        </Paragraph>
      </div>
    </>
  );
}
