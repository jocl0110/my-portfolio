import nodemailer from "nodemailer";
import { EMAIL, PASSWORD } from "../constants/env";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});
