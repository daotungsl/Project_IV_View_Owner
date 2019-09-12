import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NeedAuthGuard } from 'src/app/auth/auth.guard';
import { VoucherComponent } from 'src/app/modules/vouchers/voucher/voucher.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [NeedAuthGuard], },
    { path: 'user-profile', component: UserProfileComponent },
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
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent }
];
