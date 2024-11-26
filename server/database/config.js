require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const url = process.env.MONGO_URI;
    console.log("Connecting to MongoDB at:", url);

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit on failure
  }
};

module.exports = dbConnect;
