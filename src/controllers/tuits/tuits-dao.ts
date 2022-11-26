import mongoose from "mongoose";
import { DeleteResult } from "mongodb";

import tuitsModel from "./tuits-model";
import { ITuit } from "../../interfaces/ituit";

export const createTuit = async (tuit: ITuit): Promise<ITuit> => {
  return await tuitsModel.create(tuit);
};

export const findTuits = async (): Promise<ITuit[]> => {
  return await tuitsModel.find();
};

export const updateTuit = async (tid: mongoose.Types.ObjectId, tuit: ITuit): Promise<ITuit | null> => {
  return await tuitsModel.findByIdAndUpdate(tid, tuit, { new: true });
};

export const deleteTuit = async (tid: mongoose.Types.ObjectId): Promise<DeleteResult> => {
  return await tuitsModel.deleteOne({ _id: tid });
};
