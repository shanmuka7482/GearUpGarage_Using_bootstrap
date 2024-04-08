import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/Header"
function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
