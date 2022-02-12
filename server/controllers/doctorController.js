const asyncHandler = require("express-async-handler");
const Member = require("../models/doctor_model.js");
const CALL = require("../models/CALL_req.js");
const generateToken = require("../config/generateToken.js");

const registerDoctor = asyncHandler(async (req, res) => {
  const { name, email, password, degree, specialist } = req.body;
  if (!name || !email || !password || !degree || !specialist) {
    res.status(400);
    throw new Error("Please Enter All Fields");
  }
  const userExists = await Member.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const member = await Member.create({
    name,
    email,
    password,
    degree,
    specialist,
  });
  if (member) {
    res.status(201).json({
      _id: member._id,
      name: member.name,
      email: member.email,
      degree: member.degree,
      specialist: member.specialist,
      token: generateToken(member._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await Member.findOne({ email });
  if (user && user.matchPassword(password)) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      degree: user.degree,
      specialist: user.specialist,
      token: generateToken(user._id),
    });
  }
});

const All_Doctor = asyncHandler(async (req, res) => {
  try {
    const GET_All_Doctor = await Member.find(
      {},
      "name email degree specialist"
    );
    res.json(GET_All_Doctor);
  } catch (err) {
    res.status(400);
  }
});

const get_All_requests = asyncHandler(async (req, res) => {
  try {
    let result = await CALL.find({ doctor: req.user._id }).populate("sender");
    res.status(200).json(result);
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});

module.exports = { registerDoctor, authUser, All_Doctor, get_All_requests };
