import { Error } from "mongoose";

import RestaurantModel, { Item } from "../../models/RestaurantModel";

const fetchItems = async (restaurantID: string) => {
  const dbRestaurant = await RestaurantModel.findOne({ id: restaurantID });

  if (!dbRestaurant) {
    throw new Error("Restaurant Does Not Exist");
  }

  return dbRestaurant.items;
};

export default fetchItems;
