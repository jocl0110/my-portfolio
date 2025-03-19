import express from "express";
import { transporter } from "../config/nodeMailer";
class MessageController {
  constructor() {}
  async sendMessage(req: express.Request, res: express.Response) {
    const { first_name, last_name, subject, email, message } = req.body;
    if (!first_name || !last_name || !subject || !email || !message) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }
    try {
      // Email to me
      const mailOptionsToMe = {
        from: email,
        to: process.env.EMAIL,
        subject,
        html: `<div style="font-family: Arial, sans-serif; line-height: 1.5; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #333;">You got a new message</h2>
      <p><strong>From:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
        ${message.replace(/\n/g, "<br>")}
      </div>
      <p style="font-size: 12px; color: #555;">Sent from your portfolio contact form</p>
    </div>
  `,
      };

      // Email to sender(copy)
      const mailOptionsToSender = {
        from: process.env.EMAIL,
        to: email,
        subject: `Copy of Your Message to Jose Izquierdo`,
        html: `<div style="font-family: Arial, sans-serif; line-height: 1.5; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333;">Thank You for Reaching Out!</h2>
          <p>Hello,</p>
          <p>I received your message and will get back to you soon. Here is a copy of your message:</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background: #f9f9f9; padding: 10px; border-left: 4px solid #007bff;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="font-size: 12px; color: #555;">Best regards,<br>Jose Izquierdo</p>
        </div>`,
      };
      await transporter.sendMail(mailOptionsToMe);
      await transporter.sendMail(mailOptionsToSender);
      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    }
  }
}
module.exports = new MessageController();
