import RestaurantModel from "../../models/RestaurantModel";

const fetchRestaurant = async (id: string) => {
  const restaurant = await RestaurantModel.findOne({ id });

  if (!restaurant) {
    throw new Error("Restaurant Does Not Exist");
  }

  return restaurant;
};

export default fetchRestaurant;
