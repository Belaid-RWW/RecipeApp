import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
recipes:Recipe[] ;
  constructor(private recipesService:RecipesService) { }
 


//elle va s executer a la creation de la page html
  ngOnInit() {
    this.recipes=this.recipesService.getAllRecipes();
  }
 

}

