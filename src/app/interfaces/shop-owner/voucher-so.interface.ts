export interface IVoucherSO{
   
     data : [
        {
             id : number,
             name :  String ,
             store :  String ,
             icon :  String ,
             typeVoucher :  String ,
             nameUnAccent : String ,
             description :  String ,
             image :  String ,
             codeSale :  String ,
             percent : number,
             maxSlot : number,
             slotLeft : number,
             startDay :  String ,
             expiredDay :  String ,
             promotionTimeDto : {
                 id : number,
                 startTime : String ,
                 endTime :  String,
                 dayWeek :  String 
            },
             created :  String ,
             updated :  String ,
             status : number
        }
    ],
     message :  String ,
     status : number
}