require("dotenv").config();
const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
    user: process.env.SMTP_LOGIN,
    pass: process.env.SMTP_PASSWORD,
  },
});

module.exports = {
  smtpTransport,
};
