import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RestaurantProvider from "./contexts/RestaurantContext";
import UserProvider from "./contexts/UserContext";

import Home from "./pages/Home";

import BusinessRegistration from "./pages/BusinessRegistration";
import UserRegistration from "./pages/UserRegistration";
import AddItemSuccess from "./pages/AddItemSuccess";
import Restaurants from "./pages/Restaurants";
import UserLogin from "./pages/UseLogin";
import AddItem from "./pages/AddItem";
import Ticket from "./pages/Ticket";
import Item from "./pages/Item";

import AddError from "./pages/AddError";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  //------------------------------------------------//
  //------------------ RESTAURANT ------------------//
  //------------------------------------------------//

  {
    path: "/user/register",
    element: <UserRegistration />,
  },
  {
    path: "/user/Login",
    element: <UserLogin />,
  },
  {
    path: "/:email/restaurants",
    element: <Restaurants />,
  },
  {
    path: "/:email/restaurants/:id",
    element: <Item />,
  },
  {
    path: "/:email/ticket/:id",
    element: <Ticket />,
  },

  //------------------------------------------------//
  //------------------ RESTAURANT ------------------//
  //------------------------------------------------//

  {
    path: "/restaurant/register",
    element: <BusinessRegistration />,
  },
  {
    path: "/restaurant/item/add",
    element: <AddItem />,
  },
  {
    path: "/restaurant/item",
    element: <AddItemSuccess />,
  },

  //------------------------------------------------//
  //------------------ RESTAURANT ------------------//
  //------------------------------------------------//

  {
    path: "/add/error",
    element: <AddError />,
  },
  {
    path: "/error",
    element: <AddError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </RestaurantProvider>
  </React.StrictMode>
);
