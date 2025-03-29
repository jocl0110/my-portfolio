import express from "express";
import { sendMessage } from "../controllers/messageController";
const messageRouter = express.Router();

messageRouter.post("/send_email", sendMessage);

export default messageRouter;
