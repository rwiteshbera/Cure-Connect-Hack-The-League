const User = require("../models/user_model");
const asynchandler = require("express-async-handler");

const register_login_member = asynchandler(async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      res.status(400);
      throw new Error("please enter all fields");
    }
    const userexist = await User.findOne({ phone });
    if (userexist) {
      res.status(201).json({
        id: userexist._id,
        name: userexist.name,
        phone: userexist.phone,
      });
    } else {
      const user = await User.create({
        name,
        phone,
      });

      if (user) {
        res.status(201).json({
          id: user._id,
          name: user.name,
          phone: user.phone,
        });
      }
    }
  } catch (err) {
    res.status(400);
    console.log(err);
  }
});

module.exports = register_login_member;
