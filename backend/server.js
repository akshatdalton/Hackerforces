const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const routes = require("./routes");

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

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

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
