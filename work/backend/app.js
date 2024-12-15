const express = require('express');
const app= express();
const port=3000


app.use(express.static("../frontend"));


app.get('*',(req,res)=>{
    res.send("page not found ")
})
app.listen(port,()=>{
    console.log("created");
    
})