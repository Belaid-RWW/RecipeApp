import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})

export class AddRecipePage implements OnInit {

  constructor(private router: Router ) { }
 

 
  ngOnInit() {
  }

  valider(){

    this.router.navigate(['/recipes'])
    
  }
 
}
