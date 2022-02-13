const express = require("express");
const {
  sendREQ,
  sendRoomid,
  delReq,
} = require("../controllers/callrequestController");

const Reqrouter = express.Router();

Reqrouter.route("/call").post(sendREQ);
Reqrouter.route("/sentroomID").post(sendRoomid);
Reqrouter.route("/deleterequest").put(delReq);

module.exports = Reqrouter;
