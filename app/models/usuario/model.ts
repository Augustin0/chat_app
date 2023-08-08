import { Schema } from "mongoose"
import mongo from "mongoose"


const USUARIO = new Schema({
    correo: { unique: true, require: true, type:String },
    code: { unique: true, type:String },
    profile_image: { type:String },
    name: { type:String },
    status: { type:0|1|2},
    friends: {type:[mongo.Types.ObjectId], ref:'friend'},
}, { timestamps: true })




export default mongo.model("user", USUARIO)