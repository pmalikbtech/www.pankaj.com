/**
 * Created by pankaj on 21/5/15.
 */
var express = require('express');
var app= module.exports = express();
var bodyParser = require('body-parser');
var http=require('http');
/*var mongoClient=require('mongodb').MongoClient;
var url= 'mongodb://localhost:27017/learning';
mongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log("connected to server now");
});*/

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


require('./node.js')(app);

var port = process.env.PORT ||7000;

app.use(express.static(__dirname));
//require('./controllers/router')(app); // pass our application into our routes
// start app ===============================================
app.use('/',function(req, res) {
    res.sendFile(__dirname+'index.html',req, function () {
        console.log("sending layout");
    });
});

app.listen(port);
			// shoutout to the user
