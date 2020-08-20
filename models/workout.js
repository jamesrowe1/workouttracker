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

workoutSchema.methods.setTotalDuration = function() {
  let duration=0;
  console.log("yo")
  this.exercises.forEach(exercise => {
    duration+=exercise.duration
  });
  this.totalDuration=duration
  return this.totalDuration;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
