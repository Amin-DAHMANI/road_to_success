const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/.env" });
require("./config/db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/api/user", userRoutes);
app.use("/api/user/:id", userRoutes);

//serveur (à la fin du fichier, à lire en dernier)
app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Listening on port ${process.env.PORT}`);
});
