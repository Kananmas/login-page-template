import { Carousel } from "antd";
import Carouselcontent from "./components/Carouselcontent";

export default function Carouselpanel() {
  function onChange(number) {
    console.log(number);
  }
  return (
    <>
      <Carousel
        afterChange={onChange}
        dotPosition="bottom"
        style={{ height: "100vh" }}
      >
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
