import "../../App.css";
import Header from "./Header.jsx";
import Carousel from "./Carousel.jsx";
import ChooseUs from "./Sec_1.jsx";
import HowWorks from "./Sec_2.jsx"; //rafce
import About from "./advantages.jsx";
import Footer from "./footer.jsx";

function Home() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <ChooseUs />
      <HowWorks />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
