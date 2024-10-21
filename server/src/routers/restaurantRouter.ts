import { Router } from "express";

import {
  _fetchRestaurant,
  _fetchRestaurants,
  _addRestaurant,
} from "../controllers/RestaurantController";

import {
  _fetchItem,
  _fetchItems,
  _addItem,
} from "../controllers/RestaurantController";

const router: Router = Router();

router.route("/").get(_fetchRestaurants).post(_addRestaurant);
router.route("/:id").get(_fetchRestaurant);

router.route("/:id/item").get(_fetchItems).post(_addItem);
router.route("/:id/item/:itemID").get(_fetchItem);
export default router;
