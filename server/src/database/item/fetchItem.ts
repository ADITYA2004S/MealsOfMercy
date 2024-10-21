import RestaurantModel, { Item } from "../../models/RestaurantModel";

const fetchItem = async (restaurantID: string, itemID: string) => {
  const dbRestaurant = await RestaurantModel.findOne({ id: restaurantID });

  if (!dbRestaurant) {
    throw new Error("Failed To Fetch Item Since Restaurant Does Not Exist");
  }

  const item = dbRestaurant.items.find((item) => item.id === itemID);

  if (!item) {
    throw new Error("Item Does Not Exist");
  }

  return item;
};

export default fetchItem;
