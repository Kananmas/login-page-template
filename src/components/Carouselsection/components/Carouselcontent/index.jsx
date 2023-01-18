//components
import Label from "./components/Label";
import { WalletTwoTone, PlusCircleTwoTone } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
//picture
import chartPic from "../../../../Assets/donut-chart-1.png";

export default function Carouselcontent() {
  return (
    <div>
      <h2 className="carousel-title">FINOTIC</h2>

      <Label extraClassNames="Label-one-extra">
        <WalletTwoTone className="my_icons" />
        <Paragraph>CURRENTBALANCE</Paragraph>
        <Paragraph className="price">355$</Paragraph>
      </Label>

      <Label extraClassNames="Label-two-extra">
        <img src={chartPic} className="img-styles" alt="chart" />
      </Label>

      <Label extraClassNames="Label-three-extra">
        <div className="inner_card">
          <PlusCircleTwoTone className="my_icons" />
          <Paragraph>New transactions</Paragraph>
          <Paragraph>
            or upload <Link>.xls</Link> file
          </Paragraph>
        </div>
      </Label>

      <div className="more-text">
        <Title>Welcome back!</Title>
        <Paragraph>
          Start managing your finance better and faster <br />
          Start managing your finance better and faster
        </Paragraph>
      </div>
    </div>
  );
}
