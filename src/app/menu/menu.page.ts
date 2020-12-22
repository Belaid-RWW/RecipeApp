import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  page = [
    {
      title : 'main',
      url:'/menu/main',
      icon:'home'
    },
    {
      title: 'cool Frameworks',
      children :[
        {
          title : 'ionic',
          url:'/menu/ionic',
          icon:'logo-ionic'
        },
        {
      
          title : 'flutter',
          url:'/menu/fkutter',
          icon:'log-google'
    
        },
     
      ]
      
     }

  ];

  constructor() { }

  ngOnInit() {
  }

}
