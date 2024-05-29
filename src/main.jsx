import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Shop from './component/Shop/Shop';
import Error from './component/Error/Error';
import Home from './component/Home/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import cartLoader from './Loader/CartProductLoader/cartProductLoader';

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
        element: <Inventory></Inventory>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
