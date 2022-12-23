import mongoose, { Mongoose } from "mongoose";


const Schema = mongoose.Schema;

const  userSchema = new Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        minlength:6,
    }
})

const userModel = mongoose.model('user',userSchema);

export default userModel;
