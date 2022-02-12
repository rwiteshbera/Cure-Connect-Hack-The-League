const express = require("express");
const { sendREQ, sendRoomid } = require("../controllers/callrequestController");

const Reqrouter = express.Router();

Reqrouter.route("/call").post(sendREQ);
Reqrouter.route("/sentroomID").post(sendRoomid);

module.exports = Reqrouter;
