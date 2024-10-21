import { Router } from "express";

import {
  _fetchUser,
  _loginUser,
  _registerUser,
  _updateUser,
} from "../controllers/UserController";

const router: Router = Router();

router.post("/register", _registerUser);
router.post("/login", _loginUser);

router.route("/:email").get(_fetchUser).patch(_updateUser);

export default router;
