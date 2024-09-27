import dotenv from "dotenv";
import { Server } from "http";
import app from "./app";

dotenv.config();

const server = new Server(app);

server.listen(process.env.PORT || process.env.DEVELOPMENT_PORT, () => {
  console.log(`ACTIVE | ${process.env.PORT || process.env.DEVELOPMENT_PORT}`);
});
