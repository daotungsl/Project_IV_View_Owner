import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { VoucherComponent } from 'src/app/modules/shop-view/vouchers/voucher/voucher.component';
import { ShopComponent } from 'src/app/modules/shop-view/shops/shop/shop.component';
import { ShopAddComponent } from 'src/app/modules/shop-view/shops/shop-add/shop-add.component';
import { ShopAuthGuard } from 'src/app/auth/auth-shop.guard';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
    { path: 'dashboard', component: DashboardComponent, canActivate:[ShopAuthGuard] },
    { path: 'tables', component: TablesComponent },
    {
        path: 'voucher',
        component: VoucherComponent,
        canActivate:[ShopAuthGuard],
        children: [
            {
                path: '',
                loadChildren: 'src/app/modules/shop-view/vouchers/vouchers.module#VoucherModule',
            }
        ]
    },
    {
        path: 'info',
        component: ShopComponent,
        canActivate:[ShopAuthGuard],
        children: [
            {
                path: '',
                loadChildren: 'src/app/modules/shop-view/shops/shops.module#ShopsModule',
            }
        ]
    },
    { path: 'add',   component: ShopAddComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent }
];
