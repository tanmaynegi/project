const express = require("express");
const server = express();
const cors = require("cors")
const bodyParser = require("body-parser");
const{gettodo,addtodo,deletetodo,updatetodo} = require("./src/controllers")
const mongoose = require("mongoose");



var urlencodedParser = bodyParser.urlencoded({ extended: false })
server.use(bodyParser.json())
server.use(cors());
server.use(express.json());
mongoose.connect("mongodb://0.0.0.0:27017/todo")
mongoose.connection.on("connected",() =>{
    console.log("Database Connected");
})

mongoose.connection.on("Error",() =>{
    console.log("Database Not Connected");
})

server.get("/gettodo",gettodo)            //get is a method compass se value access krni h 
server.post("/addtodo",addtodo)           //compass mein data todo file mein dalna h postman ke through 
server.delete("/deletetodo",deletetodo)   //compass ki file todo se dlete krna h
server.post("/updatetodo",updatetodo)     // jis id pr value h usme changes krne h 

server.listen(5000,() =>{
    console.log("Server started at port 5000")
})



//Cors corss origin resource sharing
//api pr jo security lagi hoti h usko relax krne ke liye use hota h


//To handle HTTP post request in express.js version4 and above we need to install middleware
//called body-parser

//body parser extract the entire body portion of an incoming request stream and 
//exposs it on request.body.

//this body parser module parses the JSON, buffer, string and URL encoded data 
// submitted using HTTP POST request.