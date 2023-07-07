import mongoose, { Schema } from "mongoose";

const UserSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        passWord:{
            type:String,
            required:true
        },
        profilImage:{
            type:String,
            required:true,
            default:"https://www.pinterest.com/pin/417849671660689300/"
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        roles:{
            type:[Schema.Types.ObjectId],
            required:true,
            ref:"Role"
        }

    },
    {
        timestamps:true
    }
    
);

export default mongoose.model('User',UserSchema);