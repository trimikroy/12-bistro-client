import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Dashboard from "../MainLayout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: "menu",
          element:<Menu></Menu>
        }, 
        {
          path: "order/:category",
          element:<Order></Order>
        },
        {
          path: "login",
          element:<Login></Login>
        },
        {
          path: "signUp",
          element:<SignUp></SignUp>
        },
        {
          path: "secret",
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }

      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'cart',
          element: <Cart></Cart>,
        },

        // admin routes 
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>

        }
      ]
    }
  ]);