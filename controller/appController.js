const nodemailer = require('nodemailer');

const signup = async (req, res) => {

    let testAccount = await nodemailer.createTestAccount();



    let transporter = nodemailer.createTransport({
        host: "smtp.etheral.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
      });

      let message={
        from: '"Fred foo" <foo@example.com>',
        to: "bar@example.com, baz@example.com",
        subject: "Hello",
        text: "Hello world",
        html: "<b>Hello world</b>",
      }

    res.status(201).json("Signup Successful");
}

const getbill = (req, res) => {
    res.status(201).json("getBill Successful");
}

module.exports = {
    signup,
    getbill
}