import express from 'express';
import env from "dotenv"
env.config()
import connection from "./connection.js";
import todoSchema from "./models/todo.model.js"
import router from './router.js';
const app = express()
app.use(express.static("../ClientSide"))
app.use(express.json())

app.use("/api",router)

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server created");
        
    })
    
}).catch((err)=>{
    console.log(err);
    
})