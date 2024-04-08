import "../App.css";
import Carousel from "../components/home/Carousel.jsx";
import ChooseUs from "../components/home/Sec_1.jsx";
import HowWorks from "../components/home/Sec_2.jsx"; //rafce
import About from "../components/home/advantages.jsx";
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
