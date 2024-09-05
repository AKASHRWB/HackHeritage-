import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
    // UserID: {
    //     type: String,
    //     default: () => require('uuid').v4(),
    //     unique: true,
    // },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    password:{
      type:String,
      required:true,
    }, 

    
});
export const User= mongoose.model('User', UserSchema);