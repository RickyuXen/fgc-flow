import mongoose, { Schema, type InferSchemaType } from "mongoose";

const characterSchema = new Schema(
  {
    gameSlug: { type: String, required: true, index: true },
    name: { type: String, required: true },
    tags: { type: [String], required: true },
    overview: { type: String, required: true },
    difficulty: { type: String, required: true },
    video: { type: String, required: true },
    notablePlayers: { type: [String], required: true },
    resources: { type: [String], required: true },
    color: { type: String, required: true },
    pros: { type: [String], required: true },
    cons: { type: [String], required: true },
    imagePath: { type: String, required: true },
    displayOrder: { type: Number, required: true },
  },
  { timestamps: true }
);

characterSchema.index({ gameSlug: 1, displayOrder: 1 });
characterSchema.index({ gameSlug: 1, name: 1 }, { unique: true });

export type CharacterDocument = InferSchemaType<typeof characterSchema> & {
  _id: mongoose.Types.ObjectId;
};

export const Character = mongoose.model("Character", characterSchema);
