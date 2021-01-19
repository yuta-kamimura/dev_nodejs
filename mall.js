exports.sendmailer;
var receiverEmailAddress = 'b.life.kami@gmail.com';
var senderEmailAddress = 'b.life.kami@gmail.com';
var senderEmailPassword = 'gogo6153';

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // SSL
  auth: {
    user: senderEmailAddress,
    pass: senderEmailPassword,
  },
});
var mailOptions1 = {
  from: senderEmailAddress,
  to: receiverEmailAddress,
  subject: '今日はくもりです',
  text: '雨と晴れではありません',
};
transporter.sendMail(mailOptions1, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
