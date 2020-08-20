const router = require("express").Router();
const db = require("../models");
const path = require('path');
const mongojs = require("mongojs");

//opens up the excercise.html file
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
});

//open up the stats page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'stats.html'));
});

//open the index
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

//return all the workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find()
  .then(dbWorkouts => {
    res.json(dbWorkouts)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json(err);
  });
})

//return workouts for stats page
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find()
  .then(dbWorkouts => {
    res.json(dbWorkouts)
  })
  .catch(err => {
    console.log(err)
    res.status(400).json(err);
  });
})

//add a new workout
router.post("/api/workouts", ({ body }, res) => {
  const workout = {
    day: new Date().setDate(new Date().getDate()),
    exercises: []
  }
  db.Workout.create(workout)
    .then(dbWorkout => {
      res.json(dbWorkout)
      console.log(dbWorkout);
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err);
    });
});

//add a new exercise to the current workout
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body)
  console.log(mongojs.ObjectId(req.params.id))
  db.Workout.update(
    {_id: mongojs.ObjectId(req.params.id)},
    { $push: {exercises: req.body },
     $inc: { totalDuration: req.body.duration }})
    .then(newExcercise => {
      console.log(newExcercise)
      res.json(newExcercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts")

module.exports = router;
