const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/healthcare",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};
module.exports = connectDB;
