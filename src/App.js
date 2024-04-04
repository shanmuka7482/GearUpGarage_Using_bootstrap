import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import Service from "./components/Serivice/Serice";
import Contact from "./components/Contact_Us/Contact_us";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Service/> */}
      <Contact />
    </div>
  );
}

export default App;
