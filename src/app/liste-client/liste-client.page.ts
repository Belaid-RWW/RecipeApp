import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular'
import { ModalpopupPage } from '../modalpopup/modalpopup.page';

@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.page.html',
  styleUrls: ['./liste-client.page.scss'],
})
export class ListeClientPage implements OnInit {

  constructor(private modalController:ModalController) { }


  openModale()
  {
    this.modalController.create({component:ModalpopupPage}).then((modalElement)=>{
      modalElement.present();
    })}

  ngOnInit() {
  }

}
