var user = require('../model/usermodel');
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'languagepdf@gmail.com',
    pass: 'lnqj bvnl dead vbbz'
  }
});

exports.index =  async (req,res) => {

    let mailOptions = {
        from: 'languagepdf@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: '<h1>Welcome</h1><p>That was easy!</p>'
    };

    transporter.sendMail(mailOptions, async function(error, info){
        if (error) {
             res.status(400).json({
                status:"error"
            })
        } else {
            var data = await user.create(req.body);
            res.status(200).json({
                status:"success",
                data
            })
        }
    });

    
}

exports.get_data =  async (req,res) => {
    var data = await user.find();
    res.status(200).json({
        status:"success",
        data
    })
}

