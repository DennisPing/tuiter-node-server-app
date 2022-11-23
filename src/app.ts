import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller";
import UserController from "./controllers/users/users-controller";
import TuitsController from "./controllers/tuits/tuits-controller";

mongoose.connect("mongodb://localhost:27017/tuiter");
const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening on port 4000");
});
