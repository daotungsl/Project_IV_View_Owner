import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClipboardModule } from 'ngx-clipboard';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { VoucherRoutes } from './vouchers.routing';
import { VoucherAddComponent } from './voucher-add/voucher-add.component';
import { VoucherListComponent } from './voucher-list/voucher-list.component';
import { VoucherComponent } from './voucher/voucher.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(VoucherRoutes),
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    VoucherComponent,
    VoucherAddComponent,
    VoucherListComponent

  ]
})

export class VoucherModule {}
