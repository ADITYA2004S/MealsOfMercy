import { Error } from "mongoose";

import RestaurantModel, { Restaurant } from "../../models/RestaurantModel";

import getUniqueID from "../../utils/getUniqueID";

const addRestaurant = async (restaurant: Restaurant) => {
  let id: string;

  while (true) {
    id = getUniqueID("REST", 10);
    if (!(await RestaurantModel.exists({ id }))) break;
  }

  const newRestaurant = new RestaurantModel({
    ...restaurant,
    id,
  });

  try {
    return await newRestaurant.save();
  } catch (error) {
    const validationError = error as Error.ValidationError;

    for (const key in validationError.errors) {
      if (!validationError.errors[key].message) continue;
      throw new Error(validationError.errors[key].message);
    }

    throw new Error("Failed To Add Restaurant Due To Server Error");
  }
};

export default addRestaurant;
