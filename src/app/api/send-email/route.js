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
      requestNumber, // New field for tracking requests
    } = body;

    // Determine if this is a quote request (has fromCity/toCity) or contact form
    const isQuoteRequest = fromCity && toCity;

    // Generate appropriate subject line
    let emailSubject;
    if (subject) {
      emailSubject = subject;
    } else if (isQuoteRequest) {
      emailSubject = requestNumber
        ? `Free Quote Request #${requestNumber.replace("REQ-", "")}`
        : "New Free Quote Request";
    } else {
      emailSubject = "New Contact Form Submission";
    }

    // Construct the email content based on form type
    let emailContent;

    if (isQuoteRequest) {
      // Quote request from modal
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF5733; border-bottom: 2px solid #FF5733; padding-bottom: 10px;">
            Free Quote Request
          </h2>
          
          ${
            requestNumber
              ? `<p style="background-color: #f8f9fa; padding: 10px; border-left: 4px solid #FF5733;"><strong>Request Number:</strong> ${requestNumber}</p>`
              : ""
          }
          
          <h3 style="color: #333; margin-top: 20px;">Move Details:</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">From City:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${fromCity}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">To City:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${toCity}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Moving Time:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${movingTime}</td>
            </tr>
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Service Type:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${serviceType}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff3e0; border-radius: 5px;">
            <p style="margin: 0; color: #e65100;"><strong>Action Required:</strong> Please contact this customer within 24 hours to provide a detailed quote.</p>
          </div>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This quote request was submitted through the Keshav Packers and Movers website.
            <br>Timestamp: ${new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            })}
          </p>
        </div>
      `;
    } else {
      // Regular contact form
      emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF5733; border-bottom: 2px solid #FF5733; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <h3 style="color: #333; margin-top: 20px;">Customer Details:</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
            ${
              name
                ? `
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
            </tr>`
                : ""
            }
            ${
              email
                ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
            </tr>`
                : ""
            }
            ${
              phone
                ? `
            <tr style="background-color: #f8f9fa;">
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
            </tr>`
                : ""
            }
            ${
              serviceType
                ? `
            <tr>
              <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Service Type:</td>
              <td style="padding: 8px; border: 1px solid #ddd;">${serviceType}</td>
            </tr>`
                : ""
            }
          </table>
          
          ${
            message
              ? `
          <h3 style="color: #333; margin-top: 20px;">Message:</h3>
          <div style="padding: 15px; background-color: #f8f9fa; border-radius: 5px; border-left: 4px solid #FF5733;">
            <p style="margin: 0;">${message}</p>
          </div>`
              : ""
          }
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This message was submitted through the Keshav Packers and Movers website.
            <br>Timestamp: ${new Date().toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            })}
          </p>
        </div>
      `;
    }

    // Construct the email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: process.env.RECEIVER_EMAIL, // Receiver address (your email)
      subject: emailSubject,
      html: emailContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json(
      {
        message: "Email sent successfully",
        requestNumber: requestNumber || null,
        type: isQuoteRequest ? "quote" : "contact",
      },
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
