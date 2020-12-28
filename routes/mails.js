const router = require('express').Router();
const nodemailer = require('nodemailer')


router.post('', async (req,res) => {

    var transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user:"ramkumar159075@gmail.com",
            pass:'Ram@1590'
        }
    })    
    console.log(req.body)
    transporter.sendMail(req.body.body,(err,info) => {
        if(err) {
            console.log(err)
            res.send(err)
        }
        else {
            console.log("email send" + info.response)
            res.send(info)
        }
    })
})




module.exports = router