require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./routes/item");

const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: ["https://vercel.com/deshan68/chandana-motors-inventory-frontend"],
    methods: ["POST", "GET"],
    credentials: "true",
  })
);

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// routes
app.use("/api/items", itemRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
