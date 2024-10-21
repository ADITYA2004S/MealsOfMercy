import { Router } from "express";

import {
  _fetchUser,
  _loginUser,
  _registerUser,
  _updateUser,
  _addItem,
} from "../controllers/UserController";

const router: Router = Router();

router.post("/register", _registerUser);
router.post("/login", _loginUser);

router.route("/:email").get(_fetchUser).patch(_updateUser);
router.route("/:email/:itemID").post(_addItem);

export default router;
