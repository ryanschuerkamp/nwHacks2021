var express = require('express');
var router = express.Router();
var path = require('path');
var { PythonShell } = require('python-shell'); 

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Hello"); 
});

router.get('/word-cloud', function(req, res, next) {
	// Use child_process.spawn method from  
	// child_process module and assign it 
	// to variable spawn 

	let options = { 
		scriptPath: path.join(__dirname,'../') //If you are having python_test.py script in same folder, then it's optional. 
	}; 

	PythonShell.run('wordCloud.py', options, function (err, result){ 
		if (err) throw err; 
		// result is an array consisting of messages collected  
		//during execution of script. 
		res.sendFile(path.join(__dirname, '../wordcloud.png')); 
	}); 

});

module.exports = router;
