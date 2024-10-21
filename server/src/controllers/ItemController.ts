import { Request, Response } from "express";

import fetchItems from "../database/item/fetchItems";
import addItems from "../database/item/addItem";

export const _fetchItems = async (req: Request, res: Response) => {
  try {
    const items = await fetchItems(req.params.restaurantID);
    res.status(200).json(items);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};

export const _addItems = async (req: Request, res: Response) => {
  try {
    const restaurant = await addItems(req.params.restaurantID, req.body.items);
    res.status(200).json(restaurant);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
