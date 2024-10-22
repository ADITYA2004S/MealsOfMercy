import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RestaurantProvider from "./contexts/RestaurantContext";

import Home from "./pages/Home";

import UserRegistration from "./pages/UserRegistration";
import Restaurants from "./pages/Restaurants";
import Item from "./pages/Item";

import BusinessRegistration from "./pages/BusinessRegistration";
import AddItem from "./pages/AddItem";

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
    path: "/user/item/:id",
    element: <div>Hi</div>,
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
  {
    path: "/restaurants/:id",
    element: <Item />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantProvider>
      <RouterProvider router={router} />
    </RestaurantProvider>
  </React.StrictMode>
);
