import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.module';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.page.html',
  styleUrls: ['./recipedetail.page.scss'],
})
export class RecipedetailPage implements OnInit {
loadedRecipe: Recipe ; 
  constructor(  
    private activatedRoute:ActivatedRoute ,
    private recipeservice :RecipesService )

  {}

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((paramMAP)=>{
      if(!paramMAP.has("recipeId")){
        //return page 400
      }else {
        const recipeId= paramMAP.get("recipeId");
        this.loadedRecipe=this.recipeservice.getRecipeById(recipeId);
       
      }
    }
    );
  }

}
