import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RestaurantProvider from "./contexts/RestaurantContext";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import AddItem from "./pages/AddItem";

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
    element: <AddItem />,
  },
  {
    path: "/restaurants",
    element: <Restaurants />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantProvider>
      <RouterProvider router={router} />
    </RestaurantProvider>
  </React.StrictMode>
);
