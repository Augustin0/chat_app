export default interface ISender{
    to:string
    subject:string
    text:string
    
    inviteMail():Error

}