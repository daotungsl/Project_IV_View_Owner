import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, RouterLink } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NeedAuthGuard } from './auth/auth.guard';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/web-layout/web-layout.module#WebLayoutModule',
      }
    ]
  }, {
    path: 'shop',
    component: AdminLayoutComponent,
    canActivate: [NeedAuthGuard],
    // data: {
    //   role: RouterLink.CanFixABC
    // },
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
        data: {
          title: 'Day la shop',
          role: 'Xem duoc list'
        }
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },

  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  providers: [
    NeedAuthGuard
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
