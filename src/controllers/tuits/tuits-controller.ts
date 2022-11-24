import mongoose from "mongoose";
import { MongoError } from "mongodb";
import { Express, Request, Response } from "express";

import * as tuitsDao from "./tuits-dao";
import { ITuit } from "../../interfaces/ituit";

const currentUser = {
  username: "Dennis Ping",
  handle: "DennisPing",
  avatarIcon: "https://mushucdn.b-cdn.net/Profile_Portrait_cropped.jpeg",
};

const createTuit = async (req: Request, res: Response) => {
  const newTuit: ITuit = {
    ...currentUser,
    ...req.body,
  };
  try {
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
  } catch (err) {
    res.status(500).json({ message: (<MongoError>err).message });
  }
};

const findTuits = async (_req: Request, res: Response) => {
  try {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
  } catch (err) {
    res.status(500).json({ message: (<MongoError>err).message });
  }
};

const updateTuit = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.tid)) {
    res.status(400).json({ message: "Invalid tuit id" });
    return;
  }
  const tuitId = new mongoose.Types.ObjectId(req.params.tid);
  try {
    const updatedTuit = await tuitsDao.updateTuit(tuitId, req.body);
    if (updatedTuit) {
      console.log(updatedTuit);
      res.json(updatedTuit);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ message: (<MongoError>err).message });
  }
};

const deleteTuit = async (req: Request, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.tid)) {
    res.status(400).json({ message: "Invalid tuit id" });
    return;
  }
  const tuitId = new mongoose.Types.ObjectId(req.params.tid);
  try {
    const status = await tuitsDao.deleteTuit(tuitId);
    if (status.deletedCount > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    res.status(500).json({ message: (<MongoError>err).message });
  }
};

export default (app: Express) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
