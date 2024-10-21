import { Request, Response } from "express";

import fetchRestaurant from "../database/restaurant/fetchRestaurant";
import fetchRestaurants from "../database/restaurant/fetchRestaurants";
import addRestaurant from "../database/restaurant/addRestaurant";

import fetchItem from "../database/item/fetchItem";
import fetchItems from "../database/item/fetchItems";
import addItems from "../database/item/addItem";

export const _fetchRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await fetchRestaurant(req.params.id);
    res.status(200).json(restaurant);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};

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

export const _fetchItem = async (req: Request, res: Response) => {
  try {
    const item = await fetchItem(req.params.id, req.params.itemID);

    res.status(200).json(item);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};

export const _fetchItems = async (req: Request, res: Response) => {
  try {
    const items = await fetchItems(req.params.id);
    res.status(200).json(items);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};

export const _addItem = async (req: Request, res: Response) => {
  try {
    const restaurant = await addItems(req.params.id, req.body.items);
    res.status(200).json(restaurant.items);
  } catch (error: unknown) {
    res.status(404).json({
      error: error instanceof Error && error.message,
    });
  }
};
