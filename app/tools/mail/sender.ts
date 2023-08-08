import fs from "fs"
import ISender from "../../interfaces/sender"

export class Senderm implements ISender{
   private  static PASS_CODE:String|undefined=process.env.PASSMAIL
   private  static SENDER:string|undefined=process.env.SENDER 
   private static  INVITE_HTML:string
   to: string
   subject: string
   text:string
   
   constructor(
       to:string,
       subject:string,
       text:string
    ){
       this.subject=subject
       this.to=to
       this.text=text
    }

    private readFile(){
          
    }



    inviteMail(): Error {




        throw new Error("Method not implemented.")
    }
   

}


