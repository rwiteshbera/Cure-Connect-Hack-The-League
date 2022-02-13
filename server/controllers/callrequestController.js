const CALL = require("../models/CALL_req.js");
const asyncHandler = require("express-async-handler");

const sendRoomid = asyncHandler(async (req, res) => {
  const { patientPhone } = req.body;
  const { me } = req.body;
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: ` Cure Connect Meeting ID: ${me}`,
      messagingServiceSid: process.env.messageSid,
      to: patientPhone,
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

const delReq = asyncHandler(async (req, res) => {
  const { senderid } = req.body;
  if (!senderid) {
    console.log("Invalid Data");
    return res.status(400);
  }
  try {
    var req = await CALL.findByIdAndDelete(senderid, function (err) {
      console.log("deleted");
    }).clone();
    res.json("deleted successful");
  } catch (err) {
    res.status(400);
    throw new Error(err.message);
  }
});

module.exports = { sendREQ, sendRoomid, delReq };
