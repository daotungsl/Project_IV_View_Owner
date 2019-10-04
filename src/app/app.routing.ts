import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NeedAuthGuard } from './auth/auth.guard';
import { WebLayoutComponent } from './layouts/web-layout/web-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',

  },{
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
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
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
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
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
