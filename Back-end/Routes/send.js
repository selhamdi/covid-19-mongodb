var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function (req, res) {
    res.json({
        status: 'API3  Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
})
router.post('/sendMail', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'email send',
    });
    // create reusable transporter object using the default SMTP transport
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
   auth: {
      user: 'salimaeii1997@gmail.com',
      pass: '0649018266sa'
   }
});
   

    // setup email data with unicode symbols
    var mailOptions = {
        from: 'salimaeii1997@gmail.com', // Sender address
        to: 'salimaeii1997@gmail.com',         // List of recipients
        subject: 'test de corona', // Subject line
        text: 'votre test et positif'
    };
 
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (err) {
                  console.log(err)
                } else {
                  console.log(sendMail);
                }
    });
});
module.exports = router;
