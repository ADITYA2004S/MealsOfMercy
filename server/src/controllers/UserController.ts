import { Request, Response } from "express";

import fetchUser from "../database/user/fetchUser";
import registerUser from "../database/user/registerUser";
import loginUser from "../database/user/loginUser";
import updateUser from "../database/user/updateUser";

export const _fetchUser = async (req: Request, res: Response) => {
  try {
    const user = await fetchUser(req.params.email);
    res.status(200).json(user);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};

export const _registerUser = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(
      req.body.name,
      req.body.email,
      req.body.mobile,
      req.body.password,
      req.body.confirmPassword
    );

    res.status(200).json(user);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};

export const _loginUser = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body.email, req.body.password);
    res.status(200).json(user);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};

export const _updateUser = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(req.params.email, req.body);
    res.status(200).json(user);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
