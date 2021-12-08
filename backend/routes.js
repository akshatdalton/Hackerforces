const express = require("express");

const ProblemController = require("./controllers/ProblemController");

const router = express.Router();

router.get("/api/problems", ProblemController.getProblems);
router.post("/api/problems", ProblemController.createProblems);

module.exports = router;
