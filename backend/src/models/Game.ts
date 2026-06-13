import mongoose, { Schema, type InferSchemaType } from "mongoose";

const gameSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    mainInfo: { type: String, required: true },
    datePublished: { type: String, required: true },
    publisher: { type: String, required: true },
    video: { type: String, required: true },
    fontStyle: { type: String, required: true },
    fontSize: { type: String, required: true },
    fontSizeRight: { type: String, required: true },
    gameLogoSize: { type: [String], required: true },
    logoPath: { type: String, required: true },
  },
  { timestamps: true }
);

export type GameDocument = InferSchemaType<typeof gameSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const Game = mongoose.model("Game", gameSchema);
