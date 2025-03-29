import express from "express";
import { transporter } from "../config/nodeMailer";
import catchErrors from "../utils/catchErrors";
import { OK } from "../constants/http";
import { EMAIL } from "../constants/env";

export const sendMessage = catchErrors(async (req, res) => {
  const { first_name, last_name, subject, email, message } = req.body;
  if (!first_name || !last_name || !subject || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format" });
  }
  // Email to me
  const mailOptionsToMe = {
    from: email,
    to: EMAIL,
    subject,
    html: `<div style="font-family: 'Roboto', Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f4f4; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #007bff; color: #ffffff; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Message Received</h1>
        </div>
        <div style="padding: 20px;">
          <p><strong>From:</strong> ${first_name} ${last_name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        <div style="padding: 20px; text-align: center; font-size: 12px; color: #555;">
          Sent via your portfolio contact form
        </div>
      </div>
    </div>
`,
  };

  // Email to sender(copy)
  const mailOptionsToSender = {
    from: EMAIL,
    to: email,
    subject: `Thank you for reaching out, ${first_name}!`,
    html: ` <div style="font-family: 'Roboto', Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f4f4; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #007bff; color: #ffffff; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
        </div>
        <div style="padding: 20px;">
          <p>Hi ${first_name},</p>
          <p>Thank you for contacting me. I have received your message and will get back to you as soon as possible. Here is a copy of your message:</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0; border-radius: 4px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="margin-top: 20px;">Best regards,<br><strong>Jose Izquierdo</strong></p>
        </div>
        <div style="padding: 20px; text-align: center; font-size: 12px; color: #555;">
          Sent via your portfolio contact form
        </div>
      </div>
    </div>`,
  };
  await transporter.sendMail(mailOptionsToMe);
  await transporter.sendMail(mailOptionsToSender);
  return res
    .status(OK)
    .json({ success: true, message: "Email sent successfully!" });
});
