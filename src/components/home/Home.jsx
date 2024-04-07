import "../../App.css";
import Carousel from "./Carousel.jsx";
import ChooseUs from "./Sec_1.jsx";
import HowWorks from "./Sec_2.jsx"; //rafce
import About from "./advantages.jsx";

function Home() {
  return (
    <div className="App">
      <Carousel />
      <ChooseUs />
      <HowWorks />
      <About />
    </div>
  );
}

export default Home;
