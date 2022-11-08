import { Express } from "express";

const HelloController = (app: Express) => {
  app.get("/hello", (req, res) => {
    res.send("Life is good! :D");
  });
  app.get("/", (req, res) => {
    res.send("Welcome to Full Stack Development!");
  });
};
export default HelloController;
