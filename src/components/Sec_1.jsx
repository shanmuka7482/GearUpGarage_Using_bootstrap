import bgImage from "../photos/bg.png";
import Image from "react-bootstrap/Image";

function FluidExample() {
  return (
    <div className="sec_1container">
      <Image src={bgImage} fluid className="w-100" />;
    </div>
  );
}

export default FluidExample;
