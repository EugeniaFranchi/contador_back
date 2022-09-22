var mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: true
  }
});

const counter = mongoose.model("counter", counterSchema);

module.exports = counter;
