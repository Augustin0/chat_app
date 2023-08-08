import { Schema } from "mongoose"
import mongo from "mongoose"


const FRIEND = new Schema({
    name: { require: true, type:String },
    profile_image:{  type:String },
    status: { type:0|1},
    messages: {type:[mongo.Types.ObjectId], ref:'message'},
}, { timestamps: true })




export default mongo.model("friend", FRIEND)