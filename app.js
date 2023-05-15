import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { mongoURI } from "./secrets.js";
import { sessionRoute } from "./src/routes/myRoutes.js";
import {
  createAppointment,
  deleteAppoinment,
  getAllAppoinment,
  getAppointment,
} from "../functions/src/controlles/myControllers.js";

const api = express(); // create our express app
api.use(cors());
api.use(express.json());

api.post("/session", createAppointment);
api.get("/session/:sessionId", getAppointment);
api.get("/sessions", getAllAppoinment);
api.delete("/session/:sessionId", deleteAppoinment);

api.get("/", (req, res) => {
  res.json({
    message: "hello",
  });
});

api.post("/addsession", (req, res) => {
  res.json({
    message: "hello",
  });
});

api.get("/sessionTest", (req, res) => {
  res.send({ message: "ouasdhaiuskdhsauds" });
});
api.use(sessionRoute);

//This is my mongoose connection
// const mongoURI = process.env.mongoURI;

mongoose.connect(mongoURI, {
  // userNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "games",
});
mongoose.connection.on("connected", () => {
  console.log("Mongo Database connected 🤓");
});

api.use(sessionRoute);
const port = 3009;
api.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}/api/`);
});

export const app = functions.https.onRequest(api);
