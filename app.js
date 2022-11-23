var express = require('express');
var app = express();
var PORT = 3000;

// View engine setup
app.set('view engine', 'html');

// Without middleware
app.get('/', function(req, res){

	// Rendering home.ejs page
	res.render('index');
})

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
