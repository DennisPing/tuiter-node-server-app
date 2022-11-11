import { Express, Request, Response } from "express";

import posts from "./tuits";

type post = {
  _id: number;
  avatarIcon: string;
  username: string;
  handle: string;
  time: string;
  text: string;
  image?: string;
  mediaCard?: {
    mediaTitle: string;
    mediaText: string;
    mediaDomain: string;
    mediaLink: string;
  };
  topic?: string;
  comments: number;
  retuits: number;
  retuited: boolean;
  likes: number;
  liked: boolean;
  dislikes: number;
  disliked: boolean;
  socialAction?: {
    action: string;
    username: string;
  };
  verified?: boolean;
};

const currentUser = {
  username: "Dennis Ping",
  handle: "DennisPing",
  avatarIcon: "https://mushucdn.b-cdn.net/Dennis_Headshot_Portrait.jpg",
};

const templateTuit = {
  ...currentUser,
  time: "1m",
  comments: 0,
  retuits: 0,
  likes: 0,
  liked: false,
};

let tuits: post[] = posts;

const createTuit = (req: Request, res: Response) => {
  const newTuit = {
    ...templateTuit,
    ...req.body,
    _id: new Date().getTime(),
  };
  tuits.unshift(newTuit);
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
    res.send(tuits[tuitIdx]);
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
