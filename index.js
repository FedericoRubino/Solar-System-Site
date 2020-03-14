/*
	1. Every ejs hile has an extension .ejs
	2. NodeJS looks into a folder "views" to render a Page
	3. Tell NodeJS to use the ejs as page 
*/
//Lab 06

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
	res.render("venus");
	
	// res.render("home");
});

app.get("/mercury", function(req,res){
	res.render("mercury");

	res.send("this will be the mercury web page");
});


app.get("/venus", function(req,res){
	res.render("venus");
	
	res.send("this will be the Venus web page");
});

app.get("/earth", function(req,res){
	res.render("earth");
	
	res.send("this will be the Earth web page");
});


app.get("/*", function(req, res){
	res.render("error");
});

//3000 is for localhost and 8080 is for heroku
app.listen(process.env.PORT|| 3000, function(){
	console.log("Server is running...");
});

