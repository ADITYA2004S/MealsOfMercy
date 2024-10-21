import dotenv from "dotenv";
import express, { Application } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

import connectMongoDB from "./services/mongoService";

import userRouter from "./routers/userRouter";
import restaurantRouter from "./routers/restaurantRouter";

dotenv.config();

const app: Application = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: process.env.CORS,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

connectMongoDB();

app.use("/api/user", userRouter);
app.use("/api/restaurant", restaurantRouter);

export default app;
