const express = require("express");

const app = express();

const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });
require("./config/db");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the Road To Success API" });
});

const userRoutes = require("./routes/user.routes");

app.use("/api/user", userRoutes);
app.use("/api/user/:id", userRoutes);

const path = require("node:path");

app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

module.exports = app;
