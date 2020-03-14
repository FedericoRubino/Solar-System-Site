/*
	1. Every ejs hile has an extension .ejs
	2. NodeJS looks into a folder "views" to render a Page
	3. Tell NodeJS to use the ejs as page 
*/


var express = require("express");
var bodyParser = require("body-parser")
var app = express();
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
	res.render("home.ejs");
});

app.get("/mercury", function(req,res){
	res.render("mercury.ejs");

	res.send("this will be the mercury web page");
})


app.get("/venus", function(req,res){
	res.render("venus.ejs");
	
	res.send("this will be the Venus web page");
})

app.get("/earth", function(req,res){
	res.render("earth.ejs");
	
	res.send("this will be the Earth web page");
})


app.get("/*", function(req, res){
	res.render("error.ejs");
});

//3000 is for localhost and 8080 is for heroku
app.listen(process.env.PORT || 3000, function(){
	console.log("Server is running...");
});

// var friendlist = ["Alice", "Clark", "Bellamy", "Octavia"];

// app.get("/friends", function(req, res){
// 	// this sends to friends.ejs
// 	res.render("friends", {friends: friendlist});

// });

// // the form method is post so we need to call app.post
// app.post("/addfriends", function(req, res){
// 	// console.log(req.body);
// 	var newFriend = req.body.newfriend;
// 	friendlist.push(newFriend);
// 	res.redirect("/friends");
// });