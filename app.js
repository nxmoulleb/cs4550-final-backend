import "dotenv/config";
import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/userRoutes.js";
import CollectionRoutes from "./collection/collectionRoutes.js";
import ReviewRoutes from "./reviews/reviewRoutes.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/final'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
CollectionRoutes(app);
ReviewRoutes(app);
app.listen(4000);
