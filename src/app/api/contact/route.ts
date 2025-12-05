import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message, subject } = await req.json();

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                ciphers: 'SSLv3'
            }
        });

        // Verify connection configuration
        try {
            await new Promise((resolve, reject) => {
                transporter.verify(function (error, success) {
                    if (error) {
                        console.error("Transporter verification failed:", error);
                        reject(error);
                    } else {
                        console.log("Server is ready to take our messages");
                        resolve(success);
                    }
                });
            });
        } catch (verifyError) {
            console.error("Verification failed, but attempting to send anyway (or stopping):", verifyError);
            // You might want to stop here, but sometimes verify fails on some strict servers while send works. 
            // But for Brevo/Gmail usually verify works.
        }

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`,
            replyTo: email,
            to: process.env.CONTACT_EMAIL,
            subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
            text: `You have a new message from ${name} (${email}):\n\n${message}`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        // Log env vars status (don't log values)
        console.log("SMTP_HOST present:", !!process.env.SMTP_HOST);
        console.log("SMTP_USER present:", !!process.env.SMTP_USER);
        console.log("SMTP_PASS present:", !!process.env.SMTP_PASS);

        return NextResponse.json({ message: 'Failed to send email', error: String(error) }, { status: 500 });
    }
}
