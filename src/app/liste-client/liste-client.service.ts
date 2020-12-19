import { Injectable } from "@angular/core";
import { liste_client } from "./liste_client.module";
import { ListeClientPageRoutingModule } from "./liste-client-routing.module";
@Injectable({
  providedIn: 'root'
})
export class ListeClientService {
  private listeClient: liste_client[] = [
    {
      id: "001",
      Utilisateur: "xxxx",
      imageUrl:
        "https://img.cuisineaz.com/610x610/2013-12-20/i2142-spaghetti-a-la-sauce-tomate.jpg",
     
    },

    {
      id: "002",
      Utilisateur: "yyyy",
      imageUrl:
        "https://img.cuisineaz.com/610x610/2013-12-20/i2142-spaghetti-a-la-sauce-tomate.jpg",
     
    },

    {
      id: "003",
      Utilisateur: "zzzz",
      imageUrl:
        "https://img.cuisineaz.com/610x610/2013-12-20/i2142-spaghetti-a-la-sauce-tomate.jpg",
     
    },
  ];

  constructor() { }

  getAllListeClient() {
    return [...this.listeClient];
  }

  
}
