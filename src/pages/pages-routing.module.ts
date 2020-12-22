import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'flutter',
    loadChildren: () => import('./flutter/flutter.module').then( m => m.FlutterPageModule)
  },
  {
    path: 'ionic',
    loadChildren: () => import('./ionic/ionic.module').then( m => m.IonicPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
