const express = require("express");
const router = express.Router();
const verifyToken = require("./middleware/verifyToken");

const ProblemController = require("./controllers/ProblemController");
const UserController = require("./controllers/UserController");

// Handle everything related to Problem, TestCases and its Submission.
router.get("/api/problems", verifyToken, ProblemController.getProblems);
router.post("/api/problems", ProblemController.createProblem);
router.get("/api/problem/:id", ProblemController.getProblem);
router.delete("/api/problem/:id", ProblemController.deleteProblem);
router.put("/api/problem", ProblemController.updateProblem);
router.get("/api/problem/:id/testcases", ProblemController.getTestCases);
router.post("/api/problem/:id/testcases", ProblemController.createTestCase);
router.post("/api/submission", ProblemController.createSubmission);

// Handle everything related to User.
router.post("/api/users", UserController.createUser);
router.post("/api/auth", UserController.authUser);

module.exports = router;
