/*
  Author: Saikiran Reddy Gokula
  Project: Server Dice roller with Node.js
  Credits: This file was created using a combination of ChatGPT (OpenAI) 
           assistance and Web Development with Node and Express by Ethan Brown. Additional modifications 
           and customizations were made by me
  AI Usage: ChatGPT was used to suggest structure.I adapted and merged those with available templates.
*/

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Allow all origins initially (will modify later for CORS test)
app.use(cors());

// Serve public folder for testing
app.use(express.static(path.join(__dirname, "static")));

// Import routes
const diceRoutes = require("./routes/dice");
app.use("/api/dice", diceRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(port, () => {
  console.log(`🎲 Dice Roller API running at http://localhost:${port}`);
});
