const Item = require("../models/itemModel");
const mongoose = require("mongoose");

// get all workouts
const getItems = async (req, res) => {
  //   const user_id = req.user._id;
  const items = await Item.find().sort({ createdAt: -1 });
  res.status(200).json(items);
};

// // get a single workout
// const getWorkout = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such workout" });
//   }

//   const workout = await Workout.findById(id);

//   if (!workout) {
//     return res.status(404).json({ error: "No such workout" });
//   }

//   res.status(200).json(workout);
// };

// create new workout
const createItem = async (req, res) => {
  const { code, name, stock, price } = req.body;

  let emptyFields = [];

  if (!code) {
    emptyFields.push("code");
  }
  if (!name) {
    emptyFields.push("name");
  }
  if (!stock) {
    emptyFields.push("stock");
  }
  if (!price) {
    emptyFields.push("price");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to db
  try {
    // const user_id = req.user._id;
    const item = await Item.create({ code, name, stock, price });
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a workout
const deleteItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const item = await Item.findOneAndDelete({ _id: id });

  if (!item) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(item);
};

// update a workout
const updateItem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Item.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res.status(400).json({ error: "No such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
  updateItem,
};
