import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import Sec1 from "./components/Sec_1/Sec_1.jsx";
import Sec_2 from "./components/Sec_2.jsx"; //rafce

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Sec1 />
      <Sec_2 />
    </div>
  );
}

export default App;
