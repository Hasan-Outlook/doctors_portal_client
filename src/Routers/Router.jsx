import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Appointment from "../Pages/Appointment/Appointment";
import AuthLayout from "../Layout/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Signup from "../Pages/Auth/Signup/Signup";
// import Dashbord from "../Pages/UserDashbord/Dashbord";
import PrivateRoute from "./PrivateRoute";
import DashbordLayout from "../Layout/Dashbord/DashbordLayout";
import MyAppointment from "../Pages/UserDashbord/MyAppointment";
import Users from "../Pages/UserDashbord/Users";
import AdminRoute from "./AdminRoute";
import AddDoctors from "../Pages/UserDashbord/AddDoctors";
import Doctors from "../Pages/UserDashbord/Doctors";
import Payment from "../Pages/UserDashbord/Payment/Payment";
import ErrorPage from "../Components/Shared/DisplayError/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashbord',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashbord/users',
                element: <AdminRoute><Users></Users></AdminRoute>
            },
            {
                path: '/dashbord/addDoctors',
                element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path: '/dashbord/doctors',
                element: <AdminRoute><Doctors></Doctors></AdminRoute>
            },
            {
                path: '/dashbord/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/appointment/${params.id}`)
            },
           
        ]
    }
])

export default router