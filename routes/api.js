const router = require("express").Router();
const Transaction = require("../models/transaction.js");
const path = require('path');

router.post("/api/transaction", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/transaction/bulk", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/transaction", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/exercise", (req, res) => {
  //res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
  res.render("../exercise.html")
});

router.get("/exercise", (req, res) => {
  //res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
  res.render("../exercise.html")
});

module.exports = router;
