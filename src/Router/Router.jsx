import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home";
import Service from "../components/Serivice/Serice";
import Contact_us from "../components/Contact_Us/Contact_us";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Service",
        element: <Service />,
      },
      
      {
        path: "/Contact_Us",
        element: <Contact_us />,
      },
    ],
  },
]);

export default router;
