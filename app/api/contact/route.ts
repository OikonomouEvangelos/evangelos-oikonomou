import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true για 465, false για άλλες θύρες
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Βοηθάει αν τρέχεις local και έχεις θέμα με πιστοποιητικά
      }
    });

    // Οι ρυθμίσεις του email που θα λάβεις
    const mailOptions = {
      from: process.env.GMAIL_USER, // Στέλνεις από το δικό σου Gmail
      to: process.env.GMAIL_USER,   // Στέλνεις ΣΤΟ δικό σου Gmail
      replyTo: email,               // Όταν πατήσεις reply, θα απαντήσει στον πελάτη
      subject: `Portfolio New Message: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h3>Νέο μήνυμα από το Portfolio</h3>
        <p><strong>Όνομα:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Θέμα:</strong> ${subject}</p>
        <p><strong>Μήνυμα:</strong></p>
        <p>${message}</p>
      `,
    };

    // Αποστολή
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}