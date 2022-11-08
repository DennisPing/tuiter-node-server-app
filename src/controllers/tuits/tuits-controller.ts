import { Express, Request, Response } from "express";

import posts from "./tuits";

type post = {
  _id: number;
  topic: string;
  username: string;
  handle: string;
  time: string;
  image: string;
  title: string;
  tuit: string;
  liked: boolean;
  likes: number;
  replies: number;
  retuits: number;
};

let tuits: post[] = posts;

const createTuit = (req: Request, res: Response) => {
  const newTuit: post = req.body;
  newTuit._id = new Date().getTime();
  newTuit.likes = 0;
  newTuit.liked = false;
  tuits.push(newTuit);
  res.json(newTuit);
};

const findTuits = (req: Request, res: Response) => {
  res.json(tuits);
};

const updateTuit = (req: Request, res: Response) => {
  const tuitId = parseInt(req.params.tid);
  const updates = req.body;
  const tuitIdx = tuits.findIndex((tuit) => tuit._id === tuitId);
  if (tuitIdx !== -1) {
    tuits[tuitIdx] = { ...tuits[tuitIdx], ...updates };
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};

const deleteTuit = (req: Request, res: Response) => {
  const tuitId = parseInt(req.params.tid);
  let success = false;
  tuits = tuits.filter((tuit) => {
    if (tuit._id === tuitId) {
      success = true;
      return false;
    }
    return true;
  });
  if (success) {
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};

export default (app: Express) => {
  app.post("/api/tuits", createTuit);
  app.get("/api/tuits", findTuits);
  app.put("/api/tuits/:tid", updateTuit);
  app.delete("/api/tuits/:tid", deleteTuit);
};
