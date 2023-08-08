import { TError } from "../types/TError"

export default interface IUsuario{
    
    correo:string
    code:string
    profile_image:string
    name:String
    status?:0|1|2


    //JUST ADMIN STATUS 0
    invite():TError


    // mail read by user stt 1
    read_invitation():TError



    // user get registered stt 2
    newUser():TError
}