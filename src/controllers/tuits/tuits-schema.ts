import mongoose from "mongoose";

const tuitsSchema = new mongoose.Schema(
  {
    avatarIcon: { type: String, required: true },
    username: { type: String, required: true },
    handle: { type: String, required: true },
    time: { type: String, default: "1m" },
    text: String,
    image: String,
    mediaCard: {
      mediaTitle: String,
      mediaText: String,
      mediaDomain: String,
      mediaLink: String,
    },
    topic: String,
    comments: { type: Number, default: 0 },
    retuits: { type: Number, default: 0 },
    retuited: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    liked: { type: Boolean, default: false },
    dislikes: { type: Number, default: 0 },
    disliked: { type: Boolean, default: false },
    socialAction: {
      action: String,
      username: String,
    },
    verified: { type: Boolean, default: false },
  },
  { collection: "tuits" }
);
export default tuitsSchema;
