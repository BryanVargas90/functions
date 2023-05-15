import { Schema } from "mongoose";
import { model } from "mongoose";

const SessionSchema = new Schema({
  host: {
    type: String || Number,
  },
  game: {
    type: String || Number,
  },
  date: {
    type: String || Number,
  },
  time: {
    type: String || Number,
  },
});

const Session = model("Session", SessionSchema);
export default Session;
