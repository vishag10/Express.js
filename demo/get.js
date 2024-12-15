const express = require('express');
const app= express();
const port=3000
const path=require('path');

app.use(express.static(path.join(__dirname,"frontend")));

app.get('/',(req,res)=>{
    res.status(200).send('Welcome')
})

// app.get('/',(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname,"frontend","index.html"));
// })

app.get('*',(req,res)=>{
    res.send("page not found ")
})
app.listen(port,()=>{
    console.log("created");
    
})