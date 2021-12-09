const express = require("express");

const ProblemController = require("./controllers/ProblemController");

const router = express.Router();

router.get("/api/problems", ProblemController.getProblems);
router.post("/api/problems", ProblemController.createProblem);
router.get("/api/problem/:id", ProblemController.getProblem);
router.delete("/api/problem/:id", ProblemController.deleteProblem);
router.get("/api/problem/:id/testcases", ProblemController.getTestCases);
router.post("/api/submission", ProblemController.createSubmission);

module.exports = router;
