/**
 * Created by pankaj on 14/7/15.
 */

var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)
var sendMail =function(req,res,next){
    console.log("in send maillllllllllllllllllllllllllllll",req);
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "pmalikbtech@gmail.com",
            pass: "xxxxxxxxxxxxxxxxxx"
        }
    });

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.c_email, // sender address
        to: "pankajmalik110@gmail.com",
        subject: req.body.c_name,
        text: 'you have recived a mail from '+ req.body.c_email+'.Query :'+req.body.c_message+''
       // html: "<b>Hello world ✔</b>" // html body
    }

// send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        console.log("in smtp fcdhusa jash jan")
        if(error){
            console.log('asdasdad',error);
        }else{
            console.log("Message sent: " + response.message);

            next();
        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
}


module.exports=function(parent){
    parent.post('/post',function(req,res){
        console.log('asdbhajdalod',req);
        sendMail(req,res,function(){
            console.log(__dirname);
            res.redirect("/feedback.html?"+req.body.c_name);
//            res.sendFile(__dirname+'feedback.html',req, function () {
//                console.log("kl kl kl kl kl");
//            });
        });

    })
}
