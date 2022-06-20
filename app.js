const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/index.html",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/donate.html",function(req,res){
    res.sendFile(__dirname+"/donate.html");
});
app.get("/about.html",function(req,res){
    res.sendFile(__dirname+"/about.html");
});

app.get("/services.html",function(req,res){
    res.sendFile(__dirname+"/services.html");
});

app.listen(process.env.PORT||3000,function(){
    console.log("server is ready");
});

