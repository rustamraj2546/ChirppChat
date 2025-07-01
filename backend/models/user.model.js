import mongoose from 'mongoose';

// User Schema
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male", "female", "other"]
    },
    profilePic:{
        type:String,
        default:""
    }

    // createdAt, updatedAt ==> member since <createdAt>
}, {timestamps: true});

// User Model
const User = mongoose.model("User", userSchema);

export default User;