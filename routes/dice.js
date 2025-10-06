/*
  Author: Saikiran Reddy Gokula
  Project: Server Dice roller with Node.js
  Credits: This file was created using a combination of ChatGPT (OpenAI) 
           assistance and Web Development with Node and Express by Ethan Brown. Additional modifications 
           and customizations were made by me
  AI Usage: ChatGPT was used to suggest structure.I adapted and merged those with available templates.
*/

const express = require("express");
const router = express.Router();

router.get("/roll", (req, res) => {
  const die1 = Math.floor(Math.random() * 6) + 1;
  const die2 = Math.floor(Math.random() * 6) + 1;
  const total = die1 + die2;

  res.json({ die1, die2, total });
});

module.exports = router;
