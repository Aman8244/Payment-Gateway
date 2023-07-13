import DbConfig from "@/DBconfig/DBconfig";
import {model,models,Schema} from "mongoose";
DbConfig();

const UserSchema = Schema({
    username:{
        type:String ,
        required:true 
    },
    name:{
        type:String ,
        required:true 
    },
    password:{
        type:String,
        required:true 
    },
    servicesPurchased:{
        type:Array,
        required:true,
        default:[]
    },
    email:{
        type:String,
        required:true 
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }
})
const User = models.User || model("User",UserSchema);

export default User;