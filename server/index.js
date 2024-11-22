const express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session");
const bcrypt = require('bcryptjs');
const User = require('./database/user');
const Booking = require('./database/booking');
const Order = require("./database/order.js")
const weatherRelatedTips = require("./gemini.js");
const Product = require("./database/product.js")

require('dotenv').config();
const dbConnect = require('./database/config');
dbConnect();

const app = express();

var corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
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

// Booking creation endpoint
app.post('/soil-testing', async (req, res) => {
  try {
    const { userId, phone, location, sessionDate } = req.body;

    // Ensure the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create the booking
    const booking = new Booking({ userId, phone, location, sessionDate });
    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch all bookings and populate user details
app.get('/soil-testing', async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("userId", "name email") // Populate name and email from User
      .exec();

    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Test weather route
app.get('/weather-alert', async (req, res) => {
  const { index } = req.query; // Get index from query string
  try {
    const dayIndex = parseInt(index, 10); // Convert to integer
    if (isNaN(dayIndex) || dayIndex < 0) {
      return res.status(400).send("Invalid index. Please provide a valid number.");
    }

    const geminiResponse = await weatherRelatedTips(dayIndex);
    res.send(geminiResponse); // Send weather and AI suggestions
  } catch (error) {
    console.error("Error fetching weather and suggestions:", error);
    res.status(500).send("Server error. Please try again later.");
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find(); 
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching products');
  }
});

app.post("/marketplace", async (req, res) => {
  try {
    // Get userId from session or request body (depending on your authentication system)
    const userId = req.body[0].userId;   
    if (!userId) {
      return res.status(400).send("User is not authenticated");
    }

    // Extract product data from the request body
    const products = req.body;
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).send("No products provided");
    }

    // Calculate totalAmount and prepare product data for storage
    let totalAmount = 0;
    const productDetails = products.map((product) => {
      const totalPrice = product.quantity * product.price;
      totalAmount += totalPrice;
      
      return {
        productId: product.productId,
        productName: product.productName,
        quantity: product.quantity,
        price: product.price,
        totalPrice: totalPrice,
      };
    });

    // Create a new order with multiple products
    const order = new Order({
      userId: userId,
      products: productDetails,
      totalAmount: totalAmount,
    });

    const savedOrder = await order.save();
    res.status(201).send(savedOrder); // Send back the saved order data
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).send("Server error");
  }
});


app.post("/farmermarketplace", async (req, res) => {
  let data = new FarmerGoods(req.body);
  let response = await data.save();
  res.send(response);
})

// set port, listen for requests
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
