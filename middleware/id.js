const express=require('express');
// var bodyparser=require('body-parser');
const app=express();
app.use(express.json())
app.post("/",token,(req, res)=>{
    console.log("end point");
    
    console.log(req.body);
    res.send("home")
    
})
app.get("/data",(req,res)=>{
    
    console.log(req.query);
    
})
app.get("/data/:id1/:id2",(req,res)=>{
    const {id1,id2}=req.params
    console.log(id1,id2);
    
})
app.listen(3000,()=>{
    console.log("server created");
    
})
function token(req,res,next){
    console.log("middle");
    console.log(req.body);
    next()
    
    
}