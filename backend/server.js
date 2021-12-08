const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys.js").mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected ..."))
    .catch((err) => console.log(err));

// For CORS Policy
app.use(cors());

// Redirect all client requests to routes.js file.
app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
