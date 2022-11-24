import { Document } from "mongoose";

export interface ITuit extends Document {
  avatarIcon: string;
  username: string;
  handle: string;
  time: string;
  text: string;
  image: string;
  mediaCard: {
    mediaTitle: string;
    mediaText: string;
    mediaDomain: string;
    mediaLink: string;
  };
  topic: string;
  comments: number;
  retuits: number;
  retuited: boolean;
  likes: number;
  liked: boolean;
  dislikes: number;
  disliked: boolean;
  socialAction: {
    action: string;
    username: string;
  };
  verified: boolean;
}
