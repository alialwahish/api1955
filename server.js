var express = require("express");
var app=express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/api1955_db');


var MongoSchema = new mongoose.Schema({
    name:{type: String, required:true, minlength:3},
    yaerBorn:{type:Number,required:true,maxlength:2},
    
},{timestamps: true})


mongoose.model("Mongo",MongoSchema);

var Mongo = mongoose.model('Mongo');



var path= require("path");
var bodyParser= require("body-parser");

app.set('views',path.join(__dirname,'/views'));

app.set('view engine','html');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"/static")));
Mongo.remove({},function(done){});
Mongo.create({name:"user1",yaerBorn:1999},
{name:"user2",yaerBorn:1955},
{name:"user3",yaerBorn:1960},
{name:"user4",yaerBorn:1999},
{name:"user5",yaerBorn:2000},
{name:"user6",yaerBorn:1955},
{name:"user7",yaerBorn:1985},
{name:"Rawasi",yaerBorn:1955}
)

app.get('/',function(req,res){
    
    console.log("entering db")
    Mongo.find({yaerBorn:1955},function(err,data){
        res.json(data)
    })

})


app.listen(8000,function(){
    console.log("Listining on port 8000")
})