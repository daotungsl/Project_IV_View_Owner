import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { VoucherComponent } from 'src/app/modules/vouchers/voucher/voucher.component';
import { ShopComponent } from 'src/app/modules/shops/shop/shop.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tables', component: TablesComponent },
    {
        path: 'voucher',
        component: VoucherComponent,
        children: [
            {
                path: '',
                loadChildren: 'src/app/modules/vouchers/vouchers.module#VoucherModule',
            }
        ]
    },
    {
        path: 'info',
        component: ShopComponent,
        children: [
            {
                path: '',
                loadChildren: 'src/app/modules/shops/shops.module#ShopsModule',
            }
        ]
    },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent }
];
