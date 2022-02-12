const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const DoctorModel_member = mongoose.Schema(
  {
    name: { type: String, required: true },
    specialist: { type: String, required: true },
    degree: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
);

DoctorModel_member.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

DoctorModel_member.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Member = mongoose.model("Member", DoctorModel_member);
module.exports = Member;
