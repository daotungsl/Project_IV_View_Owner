import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { CategoryPageRoutes } from './category-page.routing';
import { CategoryPageTopComponent } from './category-page-top/category-page-top.component';
import { CategoryMainContentComponent } from './category-main-content/category-main-content.component';
import { CategoryPageComponent } from './category-page/category-page.component';

@NgModule({

    imports: [
        SharedModule,
        RouterModule.forChild(CategoryPageRoutes),
        NgbModule,
        ClipboardModule,



    ],
    declarations: [
        CategoryPageComponent,
        CategoryPageTopComponent,
        CategoryMainContentComponent
    ]
    ,
    exports: [
        CategoryPageComponent,
        CategoryPageTopComponent,
        CategoryMainContentComponent
    ]
})
export class CategoryPageModule { }
