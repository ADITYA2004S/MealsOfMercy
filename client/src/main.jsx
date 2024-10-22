import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import BusinessRegistration from "./component/BusinessRegistration";
import FoodRegistration from "./component/FoodRegistration";

import Home from "./pages/Home";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/business/register",
    element: <BusinessRegistration />,
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
