const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
    type: Array,
    trim: true,
    required: "Choose a type"
  },
  totalDuration: {
    type: Number,
    default: 0
  },
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
