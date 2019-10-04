import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ShopsService } from '../shops.service';
import { ERROR_ADDRESS } from 'src/app/shared/err-notify';


@Component({
  selector: 'app-shop-address-list',
  templateUrl: './shop-address-list.component.html',
  styleUrls: ['./shop-address-list.component.scss']
})
export class ShopAddressListComponent implements OnInit {
  formAddAddress: FormGroup
  errors = ERROR_ADDRESS;

  closeResult: string;

  datas = [{
    address: '2009 Dai Kim',
    description: 'Hang o day nhu c*t',
    cityId: 12,
    storeId: 5,
    status: 1
  },
  {
    address: '3214 Dai Kim',
    description: 'Hang o day nhu c*t',
    cityId: 34,
    storeId: 1,
    status: 0,

  },
  {
    address: '3254 Dai Kim',
    description: 'Hang o day nhu c*t',
    cityId: 23,
    storeId: 2,
    status: 2

  },
  {
    address: '3254 Dai Kim',
    description: 'Hang o day nhu c*t',
    cityId: 23,
    storeId: 2,
    status: 2

  },
  {
    address: '3254 Dai Kim',
    description: 'Hang o day nhu c*t',
    cityId: 23,
    storeId: 2,
    status: 2

  }
  ]

  datasCity = [{
    name: "Hà Nội",
    cityId: 12
  },
  {
    name: "Đà Nẵng",
    cityId: 34
  },
  {
    name: "Sài Gòn",
    cityId: 23
  },
  ]

  datasStore = [{
    name: "Tôn Thất Thuyết",
    storeId: 5
  },
  {
    name: "Quang Trung",
    storeId: 1
  },
  {
    name: "Mỹ Đình",
    storeId: 2
  },
  ]
  datasStatus = [{
    name: "Completed",
    statusId: 1
  },
  {
    name: "Cancelled",
    statusId: 0
  },
  {
    name: "Pending",
    statusId: 2
  },
  ]

  constructor(
    private fb: FormBuilder,
    private serviceAddress: ShopsService,
    private modalService: NgbModal

  ) { }

  ngOnInit() {
    this.formAddAddress = this.fb.group(this.serviceAddress.AddAressFormControl);
  }

  doSubmit() {
    console.log(this.formAddAddress)

    console.log(this.formAddAddress.value)
    if (this.formAddAddress.invalid) {
      return;
    }
    console.log(this.formAddAddress.value);
    this.serviceAddress.tryAddAddress(this.formAddAddress.value)
      .subscribe({
        next: value => {

          console.log(value);

        },
        error: err => {
          console.log(err);

        }
      })
  }


  open(content, type, modalDimension, data) {

    this.formAddAddress.get('address').setValue(data.address);
    this.formAddAddress.get('description').setValue(data.description);
    this.formAddAddress.get('cityId').setValue(data.cityId);
    this.formAddAddress.get('storeId').setValue(data.storeId);

    if (modalDimension === 'sm' && type === 'modal_add') {
      this.modalService.open(content, { windowClass: 'modal-lage', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === 'sm' && type === 'modal_edit') {

      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'modal_delete') {
      this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else {
      this.modalService.open(content, { centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
