var express = require('express');
var router = express.Router();
var path = require('path');
var { PythonShell } = require('python-shell'); 

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Hello"); 
});

router.get('/word-cloud', function(req, res, next) {
	let options = { 
		scriptPath: path.join(__dirname,'../') //If .py script in same folder, this is optional. 
	}; 

	PythonShell.run('wordCloud.py', options, function (err, result){ 
		if (err) throw err; 
		res.sendFile(path.join(__dirname, '../wordcloud.png')); 
	}); 
});

router.get('/visuals-themes', function(req, res, next) {
	let options = { 
		scriptPath: path.join(__dirname,'../') //If .py script in same folder, this is optional. 
	}; 

	// PythonShell.run('graphs.py', options, function (err, result){ 
		// if (err) throw err; 
		res.sendFile(path.join(__dirname, '../themes.png')); 
	// }); 
});

router.get('/visuals-pie', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../pie.png')); 
});

module.exports = router;
