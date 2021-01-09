// REQUIRES
const express = require('express');
const app = express();
const fs = require("fs");
const bodyParser = require('body-parser');

// GENERAL CONSTANTS
const msg404 = 'Page not found.';

// STATIC DIRECTORIES
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));

// APP GETS
app.get('/', function (req, res) {

    fs.readFile("./html/index.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });

});

app.get('/ajax-GET', function (req, res) {
		res.setHeader('Content-Type', 'text/html');
		
});

app.get('/ajax-GET', function (req, res) {
	res.setHeader('Content-Type', 'application/json');
	
});

// APP POSTS
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.status(404).send(msg404);
});

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('nwHacks2021 app listening on port ' + port + '!');
});
