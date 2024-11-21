const express = require('express');
const app = express();
const port = 5000; // Or any port you prefer

const cors = require('cors');
app.use(cors());  // Allow all origins to make requests

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Node.js Backend');
});

app.get("/home", (req, res)=>{
    res.send("You are in home")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
