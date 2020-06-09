// const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
// const { google } = require("googleapis");
const sgMail = require("@sendgrid/mail");

const app = express();
// const { OAuth2 } = google.auth;

const PORT = process.env.PORT || 9993;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { CLIENT_ID, CLIENT_SECRET, REFRESH_OAUTH2, ACCESS_TOKEN } = process.env;

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: "wooffte@gmail.com",
//   from: "maserallm@icloud.com",
//   subject: "Sending you a test message through sendgrid",
//   text: "They say it's easy but I've been trying for months!",
//   html: `<strong>NOTHING TO IT BUT TO DO IT</strong>`
// };

// sgMail.send(msg);

// app.use(express.static(path.join(__dirname, "client/src/index.js")));
// app.use(express.static(""));

app.post("/api/form", (req, res) => {
  console.log(req.body);
  const htmlEmail = `
    <h3>Contact Information Details</h3>

    <ul>
    <li style="list-style: none">Name: ${req.body.name}</li>
    <li style="list-style: none">Email: ${req.body.email}</li>
    <li style="list-style: none">Subject: ${req.body.subject}</li>
    </ul>

    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

  const transporter = nodemailer.createTransport({
    // host: "smtp.mailtrap.io",
    host: "smtp.sendgrid.net",
    port: 2525,
    auth: {
      // Username: "apikey",
      // Password:
      //   "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"
      user: "0030ff440c0263",
      pass: "b6ca812132cfea"
      // type: "OAuth2",
      // clientId: CLIENT_ID,
      // clientSecret: CLIENT_SECRET
      // refreshToken: REFRESH_OAUTH2
      // accessToken: ACCESS_TOKEN
    }
  });

  let mailOptions = {
    from: req.body.email,
    to: "staffonlyffte@gmail.com",
    replyTo: "staffonlyffte@gmail.com",
    subject: req.body.subject,
    text: req.body.message,
    html: htmlEmail
    // auth: {
    //   type: "OAuth2",
    //   user: "staffonlyffte@gmail.com",
    //   refreshToken: REFRESH_OAUTH2
    // }
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: %s", info.message);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  //   nodemailer.createTestAccount((err, account) => {
  //   });
});

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));
