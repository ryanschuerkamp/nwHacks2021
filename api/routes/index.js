var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/word-cloud', function(req, res, next) {
	// Use child_process.spawn method from  
	// child_process module and assign it 
	// to variable spawn 
	var spawn = require("child_process").spawnSync; 
		
	// Parameters passed in spawn - 
	// 1. type_of_script 
	// 2. list containing Path of the script 
	//    and arguments for the script  
		
	// E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
	// so, first name = Mike and last name = Will 
	
	var process = spawn('python', "../wordCloud.py"); 

	// Takes stdout data from script which executed 
	// with arguments and send this data to res object 
	
	process.stdout.on('data', function(data) { 
			res.send(data); 
	}) 
});

module.exports = router;
