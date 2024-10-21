import { Error } from "mongoose";

import RestaurantModel, { Item } from "../../models/RestaurantModel";

const addItems = async (restaurantID: string, items: Item[]) => {
  const dbRestaurant = await RestaurantModel.findOne({ id: restaurantID });

  if (!dbRestaurant) {
    throw new Error("Restaurant Does Not Exist");
  }

  dbRestaurant.items.push(...items);

  try {
    return await dbRestaurant.save();
  } catch (error) {
    const validationError = error as Error.ValidationError;

    for (const key in validationError.errors) {
      if (!validationError.errors[key].message) continue;
      throw new Error(validationError.errors[key].message);
    }

    throw new Error("Failed To Add Items Due To Server Error");
  }
};

export default addItems;
