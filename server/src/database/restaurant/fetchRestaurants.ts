import RestaurantModel from "../../models/RestaurantModel";

const fetchRestaurants = async () => await RestaurantModel.find();

export default fetchRestaurants;
