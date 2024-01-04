//server created 
const express = require('express');
const app = express();

//run kr do 3000 port pr 
app.listen(5000,()=>{
    console.log("Server Started at Port no. 3000");
});

//let's create route
app.get('/',(req,res)=>{
    res.send("Founder of the codehelp");
});

//used to parse request.body in express->PUT /POST
const bodyParser = require('body-parser');

//Specially parse json data and add it to the request.body object
app.use(bodyParser.json());

app.post('/api/cars',(req,res)=>{
    //request ki body me destructuring karke name aur brand nikal liya
    const {name,Category} = req.body;
  //name aur brand ki lock kr diya
    console.log(name);
    console.log(brand);

    res.send("Cars Submitted Successfully...");
});


//import mongoose
const mongoose = require('mongoose');

//Connect expressJs to Mongodb
mongoose.connect('mongodb://localhost:27017/cars',{
         useNewUrlParser:true,
         useUnifiedTopology:true
})
                
.then(()=>{console.log("Connection estalish successfully...")})
.catch((e)=>{console.log("We are getting some error....")})
