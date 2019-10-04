import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { WebLayoutRoutes } from './web-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { HeaderWebComponent } from './header-web/header-web.component';
import { BodyWebComponent } from './body-web/body-web.component';
import { FooterWebComponent } from './footer-web/footer-web.component';
import { CategoryPageModule } from 'src/app/modules/user-view/categories-page/category-page.module';

@NgModule({

  imports: [
    SharedModule,
    RouterModule.forChild(WebLayoutRoutes),
    NgbModule,
    ClipboardModule,
    CategoryPageModule


  ],
  declarations: [HeaderWebComponent, BodyWebComponent, FooterWebComponent
  ]
  ,
  exports: [HeaderWebComponent, BodyWebComponent, FooterWebComponent
  ]
})
export class WebLayoutModule { }
