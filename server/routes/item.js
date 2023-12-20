const express = require("express");
const {
  getItems,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/itemController");

const router = express.Router();

// GET all workouts
router.get("/", getItems);

//GET a single workout
// router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createItem);

// DELETE a workout
router.delete("/:id", deleteItem);

// UPDATE a workout
router.patch("/:id", updateItem);

module.exports = router;
