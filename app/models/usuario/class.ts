import IUsuario from "../../interfaces/usuatio"
import { TError } from "../../types/TError";

export default class Usuario implements IUsuario{
    correo: string;
    code: string;
    profile_image: string;
    name: String;
    status?: 0 | 1 | 2;

    constructor(payload:any){
      const {correo,code,profile_image,name}=payload
      this.correo=correo
      this.code=code
      this.profile_image=profile_image
      this.name=name
      this.correo=correo
    }

    invite(): TError {
        if(!this.correo)

        throw new Error("Method not implemented.");
    }
    read_invitation(): TError {
        throw new Error("Method not implemented.");
    }
    newUser(): TError {
        throw new Error("Method not implemented.");
    }

}



