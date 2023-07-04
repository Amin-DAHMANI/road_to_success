const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_ID +
      ":" +
      process.env.DB_USER_PASSWORD +
      "@roadtosuccess.vgbmqzn.mongodb.net/roadtosuccess",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
