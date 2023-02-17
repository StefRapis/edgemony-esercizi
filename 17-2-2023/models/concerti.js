const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const concertiSchema = new mongoose.Schema({
  singer: {
    type: String,
    required: true,
  },
  theatre: {
    type: String,
    required: true,
  },
  dateSub: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("concerti", concertiSchema);
