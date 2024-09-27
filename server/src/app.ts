import dotenv from "dotenv";
import express, { Application } from "express";
import { urlencoded, json } from "body-parser";
import cors from "cors";

dotenv.config();

const app: Application = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cors({
    origin: process.env.DEVELOPMENT_PORT,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.json({
    name: "Ryan Nolasco D Mello"
  });
});

export default app;
