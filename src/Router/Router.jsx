import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import ContactUs from "../Pages/ContactUs"
import Login from "../Pages/Login"
import SignUp from "../Pages/Signup";
import Faq from "../Pages/Faq";
import About from "../Pages/About";


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
        element: <ContactUs />,
      },
            
      {
        path: "/Login",
        element: <Login />,
      },
                  
      {
        path: "/Signup",
        element: <SignUp />,
      },
      {
        path: "/Faq",
        element: <Faq />,
      },
      {
        path: "/About",
        element: <About />,
      },
    ],
  },
]);

export default router;
