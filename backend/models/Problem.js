const mongoose = require("mongoose");

// Create Schema
const ProblemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Problem", ProblemSchema);
