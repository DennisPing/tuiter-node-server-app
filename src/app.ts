import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller";
import UserController from "./controllers/users/users-controller";
import TuitsController from "./controllers/tuits/tuits-controller";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/tuiter";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);

const server = http.createServer(app);
server.listen(process.env.PORT || 4000, () => {
  console.log("Listening on port " + (process.env.PORT || 4000));
});

server.keepAliveTimeout = 60 * 1000;
