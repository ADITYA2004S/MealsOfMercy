import { createContext, useState } from "react";

export const RestaurantContext = createContext();

export default function RestaurantProvider({ children }) {
  const [restaurantID, setRestaurantID] = useState(null);

  return (
    <RestaurantContext.Provider value={{ restaurantID, setRestaurantID }}>
      {children}
    </RestaurantContext.Provider>
  );
}
