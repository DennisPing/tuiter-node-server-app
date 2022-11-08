import express from "express";
import HelloController from "./controllers/hello-controller";
import UserController from "./controllers/users/users-controller";

const app = express();
HelloController(app);
UserController(app);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
