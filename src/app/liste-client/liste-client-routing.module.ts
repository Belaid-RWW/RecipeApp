import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeClientPage } from './liste-client.page';

const routes: Routes = [
  {
    path: '',
    component: ListeClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeClientPageRoutingModule {}
