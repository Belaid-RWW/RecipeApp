import { Injectable } from '@angular/core';
import { Recipe } from "./recipe.module";



@Injectable({
  providedIn: 'root'
})


export class RecipesService {
  private recipes: Recipe[] = [
    {
      id:"r1",
      title:"Spaghetti",
      imageUrl:"https://img.cuisineaz.com/610x610/2013-12-20/i2142-spaghetti-a-la-sauce-tomate.jpg",
      ingredients:["Cheese", "Pasta", "Tomato"],
    },
    {
      id:"r2",
      title:"Lasagne",
      imageUrl:"https://image.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-11250.jpg",
      ingredients:["Fromage", "Pasta", "Pepper"],
    },
    {
      id:"r3",
      title:"Panini",
      imageUrl:"https://image.freepik.com/free-photo/grilled-cheese-sandwich_144627-22672.jpg",
      ingredients:["Fromage", "Pasta", "Pepper","Onion"],
    },
    {
      id:"r4",
      title:"Crepe",
      imageUrl:"https://image.freepik.com/free-photo/pancakes-with-strawberries-chocolate-decorated-with-mint-leaf_2829-13910.jpg",
      ingredients:["Farine", "Sucre", "Chocolat","Onion"],
    },
    {
      id:"r5",
      title:"Coffee",
      imageUrl:"https://image.freepik.com/free-vector/flat-design-international-day-coffee-background-with-cup_23-2148639911.jpg",
      ingredients:["AAA", "Sucre", "Chocolat"],
    }
  ]

  getAllRecipes(){
    return[...this.recipes];
  }

  getRecipeById(recipeId: string){
    return {
      ...this.recipes.find((recipe)=> {
        return recipe.id === recipeId;
      })
    }
  }

  constructor() { }
}
