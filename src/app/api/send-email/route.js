import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Nodemailer transporter (using Gmail for this example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your Gmail App Password (not your regular password)
  },
});
console.log(process.env.EMAIL_PASS);

// POST handler for the API route
export async function POST(request) {
  try {
    // Parse the form data from the request
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      message,
      serviceType,
      fromCity,
      toCity,
      movingTime,
    } = body;

    // Construct the email content
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECEIVER_EMAIL, // Receiver address (your email)
      subject: subject || "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        ${fromCity ? `<p><strong>From City:</strong> ${fromCity}</p>` : ""}
        ${toCity ? `<p><strong>To City:</strong> ${toCity}</p>` : ""}
        ${
          movingTime ? `<p><strong>Moving Time:</strong> ${movingTime}</p>` : ""
        }
        ${
          serviceType
            ? `<p><strong>Service Type:</strong> ${serviceType}</p>`
            : ""
        }
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
