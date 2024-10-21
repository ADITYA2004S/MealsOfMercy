import { Request, Response } from "express";

import fetchRestaurants from "../database/restaurant/fetchRestaurants";
import addRestaurant from "../database/restaurant/addRestaurant";

export const _fetchRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await fetchRestaurants();
    res.status(200).json(restaurants);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};

export const _addRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await addRestaurant(req.body);
    res.status(200).json(restaurant);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
