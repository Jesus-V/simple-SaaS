import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.port || 3000;
const MONGO_URI = process.env.MONGO_URI as string;

async function startServer() {
  try {
  } catch (error) {}
}
