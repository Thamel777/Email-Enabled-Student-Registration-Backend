const nodeMailer = require('nodemailer');
require('dotenv').config();

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendConfirmationEmail = async (student) => {
    console.log('Sending confirmation email to:', student.email);

    if (!student.email || student.email.trim() === '') {
        throw new Error('Recipient email is missing');
    }

    const mailOptions = {
        from: `DETZ Global <${process.env.EMAIL_USER}>`,
        to: student.email,
        subject: `Registration Confirmation - Student ID #${student.registerId}`,
        html: `
            <!DOCTYPE html>
    <html>
    <head>
        <style>
            .email-container {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
            }
            .email-content {
                max-width: 600px;
                background-color: #ffffff;
                margin: auto;
                border-radius: 8px;
                padding: 30px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            }
            .header {
                background-color: #0073e6;
                color: #ffffff;
                padding: 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
            }
            .header h2 {
                margin: 0;
            }
            .details {
                padding: 20px 0;
            }
            .details p {
                font-size: 16px;
                margin: 10px 0;
                color: #333333;
            }
            .footer {
                font-size: 14px;
                color: #888888;
                text-align: center;
                margin-top: 30px;
            }
            .brand {
                color: #0073e6;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="email-content">
                <div class="header">
                    <h2>🎉 Registration Successful ✨</h2>
                </div>
                <div class="details">
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Student ID:</strong> ${student.registerId}</p>
                    <p><strong>Class:</strong> ${student.className}</p>
                    <p>Thank you for registering with <span class="brand">DETZ Global</span>. We’re excited to have you with us!</p>
                </div>
                <div class="footer">
                    © ${new Date().getFullYear()} DETZ Global. All rights reserved.
                </div>
            </div>
        </div>
    </body>
    </html>
        `,            
    };

    await transporter.sendMail(mailOptions);

};