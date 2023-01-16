//components
import Label from "./components/Label";
import { WalletTwoTone, PlusCircleTwoTone } from "@ant-design/icons";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
//picture
import chartPic from "../../../../Assets/donut-chart-1.png";
//css
import "./index.css";
//utilits
import inlinestyles from "../../../../utils/inlinestyles.utlis";

const {
  labelOneExtra,
  labelTwoExtra,
  labelThreeExtra,
  imgstyle,
  innerCardStyle,
  IconStyle,
} = inlinestyles;

export default function Carouselcontent() {
  return (
    <div>
      <h2 className="carousel-title">FINOTIC</h2>
      <Label extraStyles={labelOneExtra}>
        <WalletTwoTone style={IconStyle} />
        <Paragraph>CURRENTBALANCE</Paragraph>
        <Paragraph style={{ fontSize: "25px" }}>
          355 <>$</>
        </Paragraph>
      </Label>
      <Label extraStyles={labelTwoExtra}>
        <img src={chartPic} style={imgstyle} alt="chart" />
      </Label>
      <Label extraStyles={labelThreeExtra}>
        <div style={innerCardStyle}>
          <PlusCircleTwoTone style={IconStyle} />
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
