import { Schema } from "mongoose"
import mongo from "mongoose"


const USUARIO = new Schema({
    message: { require: true, type:String },
    from: { require: true, type:String },
    status: { type:0|1},
}, { timestamps: true })




export default mongo.model("user", USUARIO)