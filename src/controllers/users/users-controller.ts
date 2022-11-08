import { Express, Request, Response } from "express";

import people from "./users";

type user = {
  username: string;
  type: string;
  _id: string;
};

let users: user[] = people;

const UserController = (app: Express) => {
  app.get("/api/users", findUsers);
};

const findUsers = (req: Request, res: Response) => {
  res.json(users);
};

export default UserController;
