import mongoose from "mongoose";

import tuitsModel from "./tuits-model";
import { ITuit } from "../interfaces/ituit";

export const findTuits = () => {
  return tuitsModel.find();
};

export const createTuit = (tuit: ITuit) => {
  return tuitsModel.create(tuit);
};

export const deleteTuit = (tid: mongoose.Types.ObjectId) => {
  return tuitsModel.deleteOne({ _id: tid });
};

export const updateTuit = (tid: mongoose.Types.ObjectId, tuit: ITuit) => {
  return tuitsModel.updateOne({ _id: tid }, tuit);
};
