import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RestaurantProvider from "./contexts/RestaurantContext";
import UserProvider from "./contexts/UserContext";

import Home from "./pages/Home";

import BusinessRegistration from "./pages/BusinessRegistration";
import UserRegistration from "./pages/UserRegistration";
import Restaurants from "./pages/Restaurants";
import AddItem from "./pages/AddItem";
import Ticket from "./pages/Ticket";
import Item from "./pages/Item";

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
