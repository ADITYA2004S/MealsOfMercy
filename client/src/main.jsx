import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";

import UserRegistration from "./pages/UserRegistration";
import BusinessRegistration from "./pages/BusinessRegistration";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/register",
    element: <UserRegistration />,
  },
  {
    path: "/restaurant/register",
    element: <BusinessRegistration />,
  },
  {
    path: "/restaurant/item/add",
    element: <div>Add Your Item</div>,
  },
  {
    path: "/restaurants",
    element: <Restaurants />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
