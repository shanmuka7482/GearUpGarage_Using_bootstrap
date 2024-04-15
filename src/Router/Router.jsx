import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Service from "../Pages/Service";
import ContactUs from "../Pages/ContactUs"
import Login from "../Pages/Login"
import SignUp from "../Pages/Signup";

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
    ],
  },
]);

export default router;
