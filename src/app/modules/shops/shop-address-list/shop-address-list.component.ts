import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop-address-list',
  templateUrl: './shop-address-list.component.html',
  styleUrls: ['./shop-address-list.component.scss']
})
export class ShopAddressListComponent implements OnInit {
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
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open(content, type, modalDimension) {
    if (modalDimension === 'sm' && type === 'modal_mini') {
      this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else if (modalDimension === '' && type === 'Notification') {
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
