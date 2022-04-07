const nodemailer = require("nodemailer");

// 교재 p261
const config = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: process.env.GooGLE_MAIL,
};
