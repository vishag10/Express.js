import todoSchema from "../models/todo.model.js"

export async function addTodo(req,res){
    console.log(req.body);
    const {task}=req.body;
    //add data to database
    await todoSchema.create({task,isCompleted:false}).then(()=>{
        res.status(200).send({msg:"Task added successfully"})
    }).catch((err)=>{
        res.status(400).send(err)
    })
}

export async function getTodo(req,res){
    try {
        const todos= await todoSchema.find();
        res.status(200).send(todos)
    } catch (error) {
        res.status(500).send(error)
    }

}
export async function complete(req, res){
    console.log("hai");
    
    const {_id}=req.params
        const {isCompleted}=req.body;
        await todoSchema.updateOne({_id},{$set:{isCompleted:!isCompleted}})
        .then(()=>{
            res.status(201).send({msg:"sucessfully updated"})
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
}
export async function deleteTodo(req,res){
     const {_id}=req.params
        await todoSchema.deleteOne({_id})
        .then(()=>{
            res.status(200).send({msg:"Task deleted successfully"})
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
     
}
export async function update(req,res){
     const {_id}=req.params
        const {task}=req.body;
        await todoSchema.updateOne({_id},{$set:{task}})
        .then(()=>{
            res.status(200).send({msg:"Task updated successfully"})
        })
        .catch((err)=>{
            res.status(500).send(err)
        })
     
}