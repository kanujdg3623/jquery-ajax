var express=require("express");
var mongoose=require("mongoose");
var bodyParser = require("body-parser");
methodOverride = require('method-override');

var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.set("view engine","ejs");
app.use(methodOverride('_method'));

mongoose.connect("mongodb://localhost/ajax2",{ useNewUrlParser: true });
var ajaxSchema=new mongoose.Schema({
	Speciman: String
});
var ajax=mongoose.model("AJAX",ajaxSchema);

app.get("/",function(req,res){
	res.render("index");
});

app.post("/",function(req,res){
	ajax.create({Speciman:req.body.speciman},function(err,row){
		if(err) console.log(err);
		else res.json(row);
	});
});

app.get("/get",function(req,res){
	res.send("welcon");
});

app.post("/post",function(req,res){
	ajax.find(req.body,function(err,data){
		if(err) console.log(err);
		else
		res.json(data);
	});
});

app.put("/put",function(req,res){
	console.log(req.body);
	res.json(req.body);
});

app.delete("/delete/:id",function(req,res){
	console.log(req.params);
	res.json(req.params);
});

app.listen(3000,'localhost',function(){
	console.log("Server is listening!!!");
});

