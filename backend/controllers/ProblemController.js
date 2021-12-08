const Problem = require("../models/Problem");

module.exports = {
    getProblems(req, res) {
        Problem.find()
            .sort({ date: -1 })
            .then((problems) => res.json(problems));
    },

    createProblems(req, res) {
        const newProblem = new Problem({
            title: req.body.title,
            id: req.body.id,
        });

        newProblem.save().then((problem) => res.json(problem));
    },
};
