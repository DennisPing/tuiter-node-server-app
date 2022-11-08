import express from "express";
import HelloController from "./controllers/hello-controller";
import UserController from "./controllers/users/users-controller";

const app = express();
app.use(express.json());
HelloController(app);
UserController(app);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
