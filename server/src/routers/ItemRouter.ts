import { Router } from "express";

import { _fetchItems, _addItems } from "../controllers/ItemController";

const router: Router = Router();

router.route("/:restaurantID").get(_fetchItems).post(_addItems);

export default router;
