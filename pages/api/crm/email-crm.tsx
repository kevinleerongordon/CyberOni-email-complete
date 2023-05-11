import type { NextApiRequest, NextApiResponse } from "next";
// const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = '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'

sgMail.setApiKey(SENDGRID_API_KEY);

export async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;
  const msg = {
    from: email,
    to: 'oni.contact.mail@gmail.com',
    subject: `New Project Lead`,
    text: message,
    html: `<b>${message}</b>`
  }

  sgMail.send(msg)
    .then(() => {
      console.log('Email sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get data submitted in request's body.
  const body = req.body;
  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.name || !body.email) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'Names or Email Not Found' });
  }

  try {
    // Call sendEmail function inside the try block
    await sendEmail(req, res);
    // Send response after email has been sent
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error sending email" });
  }
}