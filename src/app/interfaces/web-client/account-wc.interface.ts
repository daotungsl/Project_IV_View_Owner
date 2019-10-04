export interface IAccount{
   data:{
    account: {
        username:  String ,
        password:  String ,
        typeAccount: number,
        status: number,
        email:  String ,
         fullName :  String ,
         gender : number,
         birthday :  String,
         phone :  String ,
         avatar :  String ,
         address :  String ,
         created : number,
         updated : number
    },
    credential : {
         accessToken :  String ,
         clientType :  String ,
         created : String,
         expired : String
    }
   },
     message  :   String  ,
     status  : number

}