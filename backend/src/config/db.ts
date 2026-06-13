import mongoose from "mongoose";
import { getMongoUri } from "./mongoUri.js";

export async function connectDB(): Promise<void> {
  await mongoose.connect(getMongoUri());
}
