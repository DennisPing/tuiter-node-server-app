import mongoose from "mongoose";

import tuitsSchema from "./tuits-schema";
import { ITuit } from "../../interfaces/ituit";

const tuitsModel = mongoose.model<ITuit>("TuitsModel", tuitsSchema);
export default tuitsModel;
