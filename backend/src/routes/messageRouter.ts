import express from "express";
const MessageController = require("../controllers/messageController");

const messageRouter = express.Router();

messageRouter.post("/send_email", MessageController.sendMessage);

export default messageRouter;
