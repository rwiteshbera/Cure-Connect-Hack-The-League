const mongoose = require("mongoose");

const reqModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  },
  {
    timestamps: true,
  }
);

const CALL = mongoose.model("Message", reqModel);

module.exports = CALL;
