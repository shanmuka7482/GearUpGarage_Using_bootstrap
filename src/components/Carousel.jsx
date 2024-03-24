import Carousel from "react-bootstrap/Carousel";
import img1 from "../photos/slideshow-1.png";
import img2 from "../photos/slideshow-2.jpg";
import img3 from "../photos/slideshow-3.jpg";
function DarkVariantExample() {
  return (
    <div>
    <Carousel data-bs-theme="dark" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;
