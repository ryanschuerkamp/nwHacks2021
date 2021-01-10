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

	// var spawn = require("child_process").spawnSync; 
		
	// Parameters passed in spawn - 
	// 1. type_of_script 
	// 2. list containing Path of the script 
	//    and arguments for the script  
		
	// E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
	// so, first name = Mike and last name = Will 
	
	// var process = spawn('python', [path.join(__dirname,'../wordCloud.py')] ); 

	// Takes stdout data from script which executed 
	// with arguments and send this data to res object 
	
	// process.stdout.on('data', function(data) { 
		// res.sendFile(path.join(__dirname, '../wordcloud.png')); 
	// }); 
});

module.exports = router;
