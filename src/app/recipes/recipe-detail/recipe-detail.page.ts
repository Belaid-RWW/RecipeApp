import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.module';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap)=>{
      if (!paramMap.has("recipeId")) {
        //return page 400
      } else {
        const recipeId = paramMap.get("recipeId");
        this.loadedRecipe = this.recipeService.getRecipeById(recipeId);
      }
    });
  }
}
