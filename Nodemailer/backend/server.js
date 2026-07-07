require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sendOTP = require("./sendEmail");

const app = express();

app.use(cors());
app.use(express.json());

let savedOTP = "";

app.post("/send-otp", async (req, res) => {

    const { email } = req.body;

    savedOTP = Math.floor(
        100000 + Math.random() * 900000
    ).toString();

    await sendOTP(email, savedOTP);

    res.json({
        message: "OTP Sent Successfully",
    });

});

app.post("/verify-otp", (req, res) => {

    const { otp } = req.body;

    if (otp === savedOTP) {

        return res.json({

            success: true,

            message: "OTP Verified"

        });

    }

    res.json({

        success: false,

        message: "Invalid OTP"

    });

});

app.listen(5000, () => {

    console.log("Server Running");

});