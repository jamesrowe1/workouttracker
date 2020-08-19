router.get("/exercise", (req, res) => {
    //res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
    res.render("../exercise.html")
  });