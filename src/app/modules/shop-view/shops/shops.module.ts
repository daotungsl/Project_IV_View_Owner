import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ShopRoutes } from './shops.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { ShopComponent } from './shop/shop.component';
import { ShopAddressAddComponent } from './shop-address-add/shop-address-add.component';
import { ShopAddressListComponent } from './shop-address-list/shop-address-list.component';
import { ShopInfoComponent } from './shop-info/shop-info.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ShopRoutes),
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    ShopComponent,
    ShopAddressAddComponent,
    ShopAddressListComponent,
    ShopInfoComponent
  ]
})

export class ShopsModule { }
