const express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session");
const User = require('./database/user');
const bcrypt = require('bcryptjs');

require('dotenv').config();
// connecting to database
const dbConnect = require('./database/config');
dbConnect();

const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to agro-sphere session" });
});

// signup api
app.post('/signup', async (req, res) => {
  try {
    const { name, email, password, isFarmer } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user
    const user = new User({ name, email, password: hashedPassword, isFarmer });
    const response = await user.save();
    res.status(201).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// login api
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.json({ message: "Login successful", user: { id: user._id, name: user.name, isFarmer: user.isFarmer } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get('/weather', async (req, res) => {
  res.send("Weather connected successfully");
})

// set port, listen for requests
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});