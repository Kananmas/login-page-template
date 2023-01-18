import { Carousel } from "antd";
import Carouselcontent from "./components/Carouselcontent";

export default function Carouselsection() {
  return (
    <>
      <Carousel className="coursel" dotPosition="bottom">
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
