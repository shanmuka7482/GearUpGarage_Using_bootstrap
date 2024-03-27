import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import ChooseUs from "./components/Sec_1.jsx";
import HowWorks from "./components/Sec_2.jsx"; //rafce
import About from "./components/advantages.jsx";
import Footer from "./components/footer.jsx";

function App() {
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

export default App;
