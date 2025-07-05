
import { NextResponse } from 'next/server';
import connectDB from '@/lib/connectDB';
import Subscriber from '@/models/Subscriber';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    await connectDB();

    // Check if already subscribed
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: 'You are already subscribed.' }, { status: 200 });
    }

    // Save new subscriber
    await Subscriber.create({ email });

    // Setup nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send welcome email
    await transporter.sendMail({
      from: `"${process.env.SITE_NAME}" <${process.env.EMAIL_USERNAME}>`,
      to: email,
      subject: `Thanks for subscribing to ${process.env.SITE_NAME}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
          <h2 style="color: #000;">🎉 Welcome to ${process.env.SITE_NAME}!</h2>
          <p>Hi there,</p>
          <p>Thank you for subscribing to updates from my developer portfolio!</p>
          <p>You'll occasionally get:</p>
          <ul>
            <li>🛠️ New project launches</li>
            <li>📘 Blog updates</li>
            <li>💡 Frontend tips & tricks</li>
          </ul>
          <p>Stay tuned! 👨‍💻</p>
          <hr style="margin: 24px 0;" />
          <p style="font-size: 12px; color: #666;">You’re receiving this because you subscribed at ${process.env.PORTFOLIO_URL}.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Subscribed successfully!.' }, { status: 201 });
  } catch (error) {
    console.error("MongoDB connection failed:", error) 
    return NextResponse.json({ error: 'Something went wrong. Please try again later.' }, { status: 500 });
  }
}
