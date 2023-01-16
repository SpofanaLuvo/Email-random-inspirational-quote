require("dotenv").config();
const { smtpTransport } = require("./config");
const quotes = require("../data/inspiration");

const quote = () => {
  const quoteToSend = quotes[Math.floor(Math.random() * quotes.length)];
  return `"${quoteToSend.text}" - ${quoteToSend.author}`;
};
const selectedQuote = quote();

const SUBJECT = "I hope this inspires you"; 

const sendInspiration = () => {
  smtpTransport.sendMail(
    {
      from: process.env.SMTP_LOGIN,
      to: process.argv.slice(2),
      subject: SUBJECT,
      text: selectedQuote,
    },
    (error) => {
      if (error) throw error.stack;
      console.log("Inspiration sent successfully.");
    }
  );
};

sendInspiration();

module.exports = { sendInspiration, selectedQuote, SUBJECT };
