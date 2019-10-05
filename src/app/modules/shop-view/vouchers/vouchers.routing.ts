import { Routes } from '@angular/router';
import { VoucherAddComponent } from './voucher-add/voucher-add.component';
import { VoucherListComponent } from './voucher-list/voucher-list.component';



export const VoucherRoutes: Routes = [
    { path: 'create',          component: VoucherAddComponent },
    { path: 'list',          component: VoucherListComponent },
    { path: 'voucher', redirectTo: 'voucher/list', pathMatch: 'prefix'},

];
