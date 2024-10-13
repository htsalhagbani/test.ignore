import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema(
 {
    title:
    { type:String,
     required:true,
    },
    body:String,
    name:String,
    isEmployee:Boolean,
  author: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'user',
  required: true
  },
  },
  
  {timestamps:true}//when create user i see what time to create !! this object 
);


const artical=mongoose.model("artical",blogSchema);// i want to export my schema to user in another table !!
export default artical; // i let the shema it is exported 
