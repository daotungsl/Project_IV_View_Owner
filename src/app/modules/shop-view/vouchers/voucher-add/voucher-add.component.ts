import { Component, OnInit } from '@angular/core';
import { VouchersService } from '../vouchers.service';
import { ITypeVoucherSO } from 'src/app/interfaces/shop-owner/voucher-type-so.interface';
import { NgbDate, ModalDismissReasons, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-voucher-add',
  templateUrl: './voucher-add.component.html',
  styleUrls: ['./voucher-add.component.scss']
})
export class VoucherAddComponent implements OnInit {

  filename: any;
  dataTypeVoucher: ITypeVoucherSO
  datasTypeVoucher: any;

  fromDate: NgbDate;
  toDate: NgbDate;
  hoveredDate: NgbDate;
  closeResult: string;
  model1 : NgbDate;
  model2 : NgbDate;

  timeSlot = ['07:00','07:30','08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30',
              '12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30',
              '17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30']

  constructor(
    private serviceVoucher: VouchersService, calendar: NgbCalendar
    
  ) { 
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return  `with: ${reason}`;
    }
}
mama(event){

}
isRangeStart(date: NgbDate){
  return this.model1 && this.model2 && date.equals(this.model1);
}
isRangeEnd(date: NgbDate){
  return this.model1 && this.model2 && date.equals(this.model2);
}
isInRange(date: NgbDate){
  return date.after(this.model1) && date.before(this.model2);
}
isActive(date: NgbDate){
  return date.equals(this.model1) || date.equals(this.model2);
}
endDateChanged(date){
  if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day )) {
    this.model1 = this.model2;
  }
}
startDateChanged(date){
  if (this.model1 && this.model2 && (this.model1.year > this.model2.year || this.model1.year === this.model2.year && this.model1.month > this.model2.month || this.model1.year === this.model2.year && this.model1.month === this.model2.month && this.model1.day > this.model2.day )) {
    this.model2 = this.model1;
  }
}
  ngOnInit() {
    this.serviceVoucher.getAllTypeVoucher().subscribe({
      next: value => {
        this.dataTypeVoucher = value;
        this.datasTypeVoucher = value.data;
        console.log(this.dataTypeVoucher);
      },
      error: err => {
        console.log(err);
      }
    }) ;
    console.log("in add voucher");
  }

}
