import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Appointment from "../Pages/Appointment/Appointment";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
import Dashbord from "../Pages/UserDashbord/Dashbord";
import PrivateRoute from "./PrivateRoute";
import DashbordLayout from "../Layout/Dashbord/DashbordLayout";



const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            
        ]
    },
    {
        path: '/signup',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/login',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashbord',
        element: <PrivateRoute><DashbordLayout></DashbordLayout></PrivateRoute>,
        children: [
            {
                path: '/dashbord',
                element: <Dashbord></Dashbord>
            },
           
        ]
    }
])

export default router