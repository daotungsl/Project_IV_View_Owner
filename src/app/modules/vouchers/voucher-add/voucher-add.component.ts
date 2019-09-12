import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voucher-add',
  templateUrl: './voucher-add.component.html',
  styleUrls: ['./voucher-add.component.scss']
})
export class VoucherAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("in add voucher");
  }

}
