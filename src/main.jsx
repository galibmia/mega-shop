import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import cartLoader from './Loader/CartProductLoader/cartProductLoader';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import AuthProvider from './component/provider/AuthProvider';
import CheckOut from './component/CheckOut/CheckOut';
import PrivateRoutes from './component/routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartLoader
      },
      {
        path: "inventory",
        element: <PrivateRoutes><Inventory></Inventory></PrivateRoutes>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "checkout",
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
