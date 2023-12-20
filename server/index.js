require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/item");

const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: ["https://chandana-motors-inventory-frontend.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PATCH"],
    credentials: "true",
  })
);

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello, Express!");
});

// routes
app.use("/api/items", itemRoutes);

// connect to db
mongoose
  .connect(
    "mongodb+srv://arundeshan:XPURjjIX2QH2hUVU@cluster0.v0fmtte.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    // listen for requests
    app.listen(3000, () => {
      console.log("connected to db & listening on port", 3000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
