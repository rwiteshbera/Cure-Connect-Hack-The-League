const CALL = require("../models/CALL_req.js");
const asyncHandler = require("express-async-handler");

const sendRoomid = asyncHandler(async (req, res) => {
  const { phone } = req.body;
  const { msg } = req.body;
  const accountSid = "AC7a18f6bb30af812ce19f038d016bd4f1";
  const authToken = "1f886b11ee4fe89fa1079e6f6899e976";
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: msg,
      messagingServiceSid: "MG0939de83f51236c0700606d29c196c63",
      to: phone,
    })
    .then((m) => res.json(m))
    .done();
});

const sendREQ = asyncHandler(async (req, res) => {
  const { senderID } = req.body;
  const { receiverID } = req.body;
  if (!senderID || !receiverID) {
    console.log("Invalid Data");
    return res.status(400);
  }
  try {
    const config = {
      sender: senderID,
      doctor: receiverID,
    };

    var req = await CALL.create(config);
    req = await req.populate("sender", "name phone");
    req = await req.populate("doctor", "-password");
    res.json(req);
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});

module.exports = { sendREQ, sendRoomid };
