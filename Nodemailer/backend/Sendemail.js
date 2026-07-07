const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendOTP = async (email, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,

        to: email,

        subject: "OTP Verification",

        html: `
      <h2 style="background-color: #f0f0f0; padding: 10px; margin: 0;">Your OTP is</h2>

      <h1>${otp}</h1>

      <p>This OTP is valid for 5 minutes.</p>
    `,
    });
};

module.exports = sendOTP;