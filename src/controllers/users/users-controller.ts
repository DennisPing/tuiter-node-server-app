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
  app.get("/api/users/:uid", findUserById);
  app.post("/api/users", createUser);
  app.delete("/api/users/:uid", deleteUser);
  app.put("/api/users/:uid", updateUser);
};

const findUsers = (req: Request, res: Response) => {
  const type = req.query.type;
  if (type) {
    const usersOfType = users.filter((u) => u.type === type);
    res.json(usersOfType);
    return;
  }
  res.json(users);
};

const findUserById = (req: Request, res: Response) => {
  const userId = req.params.uid;
  const user = users.filter((u) => u._id === userId);
  res.json(user);
};

const createUser = (req: Request, res: Response) => {
  const newUser: user = req.body;
  newUser._id = new Date().getTime().toString();
  users.push(newUser);
  res.json(newUser);
};

const deleteUser = (req: Request, res: Response) => {
  const userId = req.params.uid;
  users = users.filter((u) => u._id !== userId);
  res.sendStatus(200);
};

const updateUser = (req: Request, res: Response) => {
  const userId = req.params.uid;
  const updates = req.body;
  users = users.map((u) => (u._id === userId ? { ...u, ...updates } : u));
  res.sendStatus(200);
};

export default UserController;
