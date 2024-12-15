import express from 'express';
const PORT=3000
import mongoose from 'mongoose';
import todoSchema from "./models/model.js"
const app = express()
app.use(express.static("../ClientSide"))
app.use(express.json())


app.post("/addnum",async (req, res) => {
    console.log(req.body);
    const {fname}=req.body;
    const {lname}=req.body;
    const {num}=req.body;
    await todoSchema.create({fname,lname,num}).then(()=>{
        res.status(200).send({msg:"Task added successfully"})
    }).catch((err)=>{
        res.status(400).send(err)
    })
    
})
//get todo
app.get("/getnum",async (req, res)=>{
    try {
        const todos= await todoSchema.find();
        res.status(200).send(todos)
    } catch (error) {
        res.status(500).send(error)
    }

})


//delete
// app.delete("/deletetodo/:_id",async (req, res)=>{
//     const {_id}=req.params
//     await todoSchema.deleteOne({_id})
//     .then(()=>{
//         res.status(200).send({msg:"Task deleted successfully"})
//     })
//     .catch((err)=>{
//         res.status(500).send(err)
//     })
 
// })

mongoose.connect("mongodb://127.0.0.1:27017/ADDCONTACT")
.then(()=>{
    console.log("database connected successfully");
    app.listen(PORT,()=>{
        console.log("server created");
        
    })
    
}).catch((err)=>{
    console.log(err);
    
})