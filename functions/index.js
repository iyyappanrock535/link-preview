const functions = require("firebase-functions");
const express = require("express");
const path = require("path");

const app = express();

// Serve your React app from the "build" folder
app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

exports.app = functions.https.onRequest(app);
