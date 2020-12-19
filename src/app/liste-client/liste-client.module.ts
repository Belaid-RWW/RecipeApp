import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeClientPageRoutingModule } from './liste-client-routing.module';

import { ListeClientPage } from './liste-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeClientPageRoutingModule
  ],
  declarations: [ListeClientPage]
})
export class ListeClientPageModule {
  
}
