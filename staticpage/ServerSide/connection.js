import mongoose from "mongoose";
export default async function connetion(){
    const db=await mongoose.connect(process.env.DB_URL+process.env.DB_NAME)
    console.log("Connected to database");
    return db;
}