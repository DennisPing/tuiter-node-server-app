import mongoose from "mongoose";

import tuitsModel from "./tuits-model";
import { ITuit } from "../../interfaces/ituit";

export const createTuit = (tuit: ITuit) => {
  return tuitsModel.create(tuit);
};

export const findTuits = () => {
  return tuitsModel.find();
};

export const updateTuit = (tid: mongoose.Types.ObjectId, tuit: ITuit) => {
  return tuitsModel.findByIdAndUpdate(tid, tuit, { new: true });
};

export const deleteTuit = (tid: mongoose.Types.ObjectId) => {
  return tuitsModel.deleteOne({ _id: tid });
};
