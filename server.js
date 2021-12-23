const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const routes = require("./routes");

const app = express();

// ExpressJS Middleware
app.use(express.json());

// Connect to Mongo
mongoose
    .connect(process.env.MONGO_DB_SECRET, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Connected ..."))
    .catch((err) => console.log(err));

// For CORS Policy
app.use(cors());

// Redirect all client requests to routes.js file.
app.use(routes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    // Set static folder
    app.use(express.static("../frontend/build"));

    app.get("*", (req, res) => {
        res.sendFile(
            path.resolve(__dirname, "..", "frontend", "build", "index.html")
        );
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
