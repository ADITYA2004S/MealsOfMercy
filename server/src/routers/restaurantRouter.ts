import { Router } from "express";

import {
  _fetchRestaurants,
  _addRestaurant,
} from "../controllers/RestaurantController";

const router: Router = Router();

router.route("/").get(_fetchRestaurants).post(_addRestaurant);

export default router;
