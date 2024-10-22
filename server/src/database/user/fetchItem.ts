import { Error } from "mongoose";

import { Item } from "../../models/RestaurantModel";

import fetchRestaurants from "../restaurant/fetchRestaurants";

const fetchItem = async (itemID: string) => {
  const restaurants = await fetchRestaurants();

  let dbItems: Item[] = [];

  for (const restaurant of restaurants) {
    dbItems = [...dbItems, ...restaurant.items];
  }

  const dbItem = dbItems.find((dbItem) => dbItem.id === itemID);

  if (!dbItem) {
    throw new Error("Item Does Not Exist");
  }

  return dbItem;
};

export default fetchItem;
