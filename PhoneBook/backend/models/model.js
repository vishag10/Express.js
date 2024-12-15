import mongoose from "mongoose";
const numSchema=new mongoose.Schema({
    fname:{type:String},
    lanme:{type:String},
    num:{type:String}
})
export default mongoose.model.Todo||mongoose.model("Todo",numSchema);