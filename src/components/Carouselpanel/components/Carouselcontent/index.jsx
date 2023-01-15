import { WalletTwoTone, PlusCircleTwoTone } from "@ant-design/icons";
import chartPic from "../../../../Assets/donut-chart-1.png";
import Label from "./components/Label";

const IconStyle = { marginLeft: "14px", fontSize: "45px", marginTop: "14px" };

export default function Carouselcontent() {
  return (
    <div>
      <Label
        extraStyles={{
          left: "255px",
          top: "45px",
          textAlign: "center",
        }}
      >
        <WalletTwoTone style={IconStyle} />
        <p>CURRENTBALANCE</p>
        <p style={{ fontSize: "25px" }}>
          355 <>$</>
        </p>
      </Label>
      <Label extraStyles={{ left: "390px", top: "16px", zIndex: "10" }}>
        <img
          src={chartPic}
          style={{ width: "150px", height: "150px", margin: "8.5%" }}
          alt="chart"
        />
      </Label>
      <Label extraStyles={{ width: "200px", height: "150px", left: "200px" }}>
        <div
          style={{
            border: "1px dashed black",
            margin: "3%",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <PlusCircleTwoTone
            style={{ ...IconStyle, position: "relative", bottom: "50%" }}
          />
          <p>New transactions</p>
          <p>or upload .xls file</p>
        </div>
      </Label>
      <div className="more-text">
        <h1>Welcome back!</h1>
        <p>Start managing your finance better and faster</p>
        <p>Start managing your finance better and faster</p>
      </div>
    </div>
  );
}
