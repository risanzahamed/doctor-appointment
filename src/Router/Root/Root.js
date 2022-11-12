import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentications/Login/Login/Login";
import About from "../../Pages/About/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import ContactUs from "../../Pages/ContactUs/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import Reviews from "../../Pages/Reviews/Reviews/Reviews";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
              path: '/Reviews',
              element: <Reviews/>
          },
          {
              path: '/Contact-Us',
              element: <ContactUs/>
          },
          {
            path: "/about",
            element: <About />,
          },
        ]
    }
])


export default router