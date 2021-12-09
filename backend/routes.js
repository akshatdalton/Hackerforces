const express = require("express");

const ProblemController = require("./controllers/ProblemController");
const UserController = require("./controllers/UserController");

const router = express.Router();

// Handle everything related to Problem, TestCases and its Submission.
router.get("/api/problems", ProblemController.getProblems);
router.post("/api/problems", ProblemController.createProblem);
router.get("/api/problem/:id", ProblemController.getProblem);
router.delete("/api/problem/:id", ProblemController.deleteProblem);
router.put("/api/problem", ProblemController.updateProblem);
router.get("/api/problem/:id/testcases", ProblemController.getTestCases);
router.post("/api/problem/:id/testcases", ProblemController.createTestCase);
router.post("/api/submission", ProblemController.createSubmission);

// Handle everything related to User.
router.post("/api/users", UserController.createUser);

module.exports = router;
