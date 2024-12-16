import mongoose from "mongoose";
const numSchema=new mongoose.Schema({
    fullname:{type:String},
    num:{type:String}
})
export default mongoose.model.Todo||mongoose.model("Todo",numSchema);