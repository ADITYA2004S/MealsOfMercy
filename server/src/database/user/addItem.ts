import { Error } from "mongoose";

import UserModel from "../../models/UserModel";
import { Item } from "../../models/RestaurantModel";

import fetchRestaurants from "../restaurant/fetchRestaurants";

const addItem = async (email: string, itemID: string) => {
  const dbUser = await UserModel.findOne({ email });

  if (!dbUser) {
    throw new Error("Failed To Add Item Since User Does Not Exist");
  }

  if (dbUser.item.id.length !== 0) {
    throw new Error("User Already Has A Pending Ticket");
  }

  const restaurants = await fetchRestaurants();

  let dbItems: Item[] = [];

  for (const restaurant of restaurants) {
    dbItems = [...dbItems, ...restaurant.items];
  }

  const dbItem = dbItems.find((dbItem) => dbItem.id === itemID);

  if (!dbItem) {
    throw new Error("Item Does Not Exist");
  }

  dbUser.item = { id: dbItem.id };

  try {
    return await dbUser.save();
  } catch (error) {
    const validationError = error as Error.ValidationError;

    for (const key in validationError.errors) {
      if (!validationError.errors[key].message) continue;
      throw new Error(validationError.errors[key].message);
    }

    throw new Error("Failed To Add Item Due To Server Error");
  }
};

export default addItem;
