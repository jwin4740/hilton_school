var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;




app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/main.html'));
});
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/login.html'));
});
app.get('/enroll', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/enroll.html'));
});
app.get('/teachers', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/teachers.html'));
});
app.get('/tuition', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/tuition.html'));
});
app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/assets/htmlFiles/contact.html'));
});


app.listen(port, function (error) {
    if (error) throw err;
    else {
        console.log('\n...server listening on port %i', port);
    }
});

