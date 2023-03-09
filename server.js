const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

const nodeMailer = require("nodemailer");
require("dotenv").config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// simple backend to send the emails
app.post("/contact", (req, res) => {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // should be replaced with real sender's account
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  let mailOptions = {
    // should be replaced with real recipient's account
    to: process.env.USER_EMAIL,
    subject: "Portfolio Response",
    text: `From: ${req.body.email} \n${req.body.name} \n\n${req.body.messageContent}`,
  };

  let mailBackOptions = {
    // should be replaced with real recipient's account
    to: req.body.email,
    subject: "Message to Abdul Haqani",
    text: `This is a confirmation email\n\nThe following message was successfully sent to Abdul Haqani \n\n"${req.body.messageContent}"`,
  };

  // mail back first
  transporter.sendMail(mailBackOptions, (error, info) => {
    if (error) {
      return;
    } else {
      // successful mailback, send message to me now (to avoid spam from fake emails)
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return;
        }
      });
    }
  });

  res.end();
});

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.listen(process.env.PORT || 3001);
