import { Carousel } from "antd";
import Carouselcontent from "./components/Carouselcontent";

export default function Carouselpanel() {
  return (
    <>
      <Carousel dotPosition="bottom" style={{ height: "100vh" }}>
        <div>
          <Carouselcontent />
        </div>
        <div>
          <Carouselcontent />
        </div>
        <div>
          <Carouselcontent />
        </div>
        <div>
          <Carouselcontent />
        </div>
      </Carousel>
    </>
  );
}
