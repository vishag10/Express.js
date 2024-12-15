import express from 'express';
const PORT=3000
import mongoose from 'mongoose';
import todoSchema from "./models/todo.model.js"
const app = express()
app.use(express.static("../ClientSide"))
app.use(express.json())


app.post("/addtodo",async (req, res) => {
    console.log(req.body);
    const {task}=req.body;
    //add data to database
    await todoSchema.create({task,isCompleted:false}).then(()=>{
        res.status(200).send({msg:"Task added successfully"})
    }).catch((err)=>{
        res.status(400).send(err)
    })
    
})
//get todo
app.get("/gettodos",async (req, res)=>{
    try {
        const todos= await todoSchema.find();
        res.status(200).send(todos)
    } catch (error) {
        res.status(500).send(error)
    }

})

app.put("/iscompleted/:_id",async(req, res)=>{
    const {_id}=req.params
    const {isCompleted}=req.body;
    await todoSchema.updateOne({_id},{$set:{isCompleted:!isCompleted}})
    .then(()=>{
        res.status(201).send({msg:"sucessfully updated"})
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
})
//delete
app.delete("/deletetodo/:_id",async (req, res)=>{
    const {_id}=req.params
    await todoSchema.deleteOne({_id})
    .then(()=>{
        res.status(200).send({msg:"Task deleted successfully"})
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
 
})
app.put("/update/:_id",async (req, res)=>{
    const {_id}=req.params
    const {task}=req.body;
    await todoSchema.updateOne({_id},{$set:{task}})
    .then(()=>{
        res.status(200).send({msg:"Task updated successfully"})
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
 
})

mongoose.connect("mongodb://127.0.0.1:27017/TODOADDTASK")
.then(()=>{
    console.log("database connected successfully");
    app.listen(PORT,()=>{
        console.log("server created");
        
    })
    
}).catch((err)=>{
    console.log(err);
    
})