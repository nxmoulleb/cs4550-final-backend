import "dotenv/config";
import express from "express";
import session from "express-session";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/userRoutes.js";
import CollectionRoutes from "./collection/collectionRoutes.js";
mongoose.connect("mongodb://127.0.0.1:27017/final");
const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
CollectionRoutes(app);
app.listen(4000);
