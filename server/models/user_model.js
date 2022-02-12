const mongoose = require("mongoose");

const userModel_member = mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("User", userModel_member);
module.exports = User;
