import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FoodRegistration from "./component/FoodRegistration";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import UserRegistration from "./pages/UserRegistration";

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
    path: "/restaurants",
    element: <Restaurants />,
  },
  {
    path: "/business/register",
    element: <Restaurants />,
  },
  {
    path: "/register/user",
    element: <div>User Registration</div>,
  },
  {
    path: "/business/add",
    element: <FoodRegistration />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
