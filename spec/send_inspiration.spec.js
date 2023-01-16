require("dotenv").config();
const { smtpTransport } = require("../src/config");
const {
  sendInspiration,
  SUBJECT,
  selectedQuote,
} = require("../src/send_inspiration");

describe("sendMail", () => {
  it("should call the smtpTransport method and send an email to the given email addresses", () => {
    spyOn(smtpTransport, "sendMail");
    sendInspiration();
    expect(smtpTransport.sendMail).toHaveBeenCalledOnceWith(
      {
        from: process.env.SMTP_LOGIN,
        to: process.argv.slice(2),
        subject: SUBJECT,
        text: selectedQuote,
      },
      jasmine.any(Function)
    );
  });
});
