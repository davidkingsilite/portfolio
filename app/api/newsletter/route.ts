// // app/api/newsletter/route.ts
// import { NextResponse } from 'next/server';
// import connectDB from '@/lib/connectDB';
// import Subscriber from '@/models/Subscriber';
// import nodemailer from 'nodemailer';

// export async function POST(req: Request) {
//   const { email } = await req.json();


//   if (!email) return NextResponse.json({ error: 'Email is required' }, { status: 400 });

//   await connectDB();

//   const exists = await Subscriber.findOne({ email });

//   if (exists) return NextResponse.json({ message: 'Already subscribed' });

//   const newSubscriber = await Subscriber.create({ email });
//   console.log('New subscriber:', newSubscriber.email); // or log ID, etc.


//   // Send welcome email
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   await transporter.sendMail({
//   from: process.env.EMAIL_USERNAME,
//   to: email,
//   subject: 'Welcome to the ProCleaning Newsletter!',
//   html: `
//     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f8f9fa; color: #333;">
//       <div style="text-align: center; margin-bottom: 20px;">
//         <img src="https://yourdomain.com/logo.png" alt="ProCleaning Logo" style="height: 60px;" />
//       </div>

//       <h2 style="color: #28a745;">Welcome to ProCleaning!</h2>

//       <p>Hi there 👋,</p>

//       <p>Thank you for subscribing to the <strong>ProCleaning Newsletter</strong>! We’re thrilled to have you on board.</p>

//       <p>Here’s what you can expect as a subscriber:</p>
//       <ul>
//         <li>🧼 Expert cleaning tips to keep your home fresh and spotless</li>
//         <li>🌿 Eco-friendly product recommendations</li>
//         <li>💡 Seasonal advice and home organization hacks</li>
//         <li>🎁 Exclusive promotions and service updates</li>
//       </ul>

//       <p>We’re here to help make your home a cleaner, healthier place — one email at a time.</p>

//       <p>Have questions or ideas? Just reply to this email. We’d love to hear from you!</p>

//       <hr style="margin: 30px 0;" />

//       <p style="text-align: center;">Follow us for more tips and offers:</p>

//       <div style="text-align: center; margin-bottom: 20px;">
//         <a href="https://facebook.com/yourpage" style="margin: 0 8px;"><img src="https://cdn-icons-png.flaticon.com/24/733/733547.png" alt="Facebook" /></a>
//         <a href="https://twitter.com/yourprofile" style="margin: 0 8px;"><img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" /></a>
//         <a href="https://instagram.com/yourprofile" style="margin: 0 8px;"><img src="https://cdn-icons-png.flaticon.com/24/733/733558.png" alt="Instagram" /></a>
//       </div>

//       <p style="font-size: 12px; color: #888; text-align: center;">
//         You’re receiving this email because you signed up at <a href="https://procleaning.com">procleaning.com</a>.<br />
//         <a href="https://procleaning.com/unsubscribe?email=${email}" style="color: #888;">Unsubscribe</a>
//       </p>
//     </div>
//   `,
// });


//   return NextResponse.json({ message: 'Subscribed successfully' });
// }

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
