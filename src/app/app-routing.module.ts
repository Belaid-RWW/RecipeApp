import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    redirectTo: "recipes",
    pathMatch: "full",
  },
  {
    path: "addrecipe",
    loadChildren: () =>
          import("./recipes/add-recipe/add-recipe.module").then((m) => m.AddRecipePageModule),
  },
  {
    path: "recipes",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./recipes/recipes.module").then((m) => m.RecipesPageModule),
      },
      {
        path: ":recipeId",
        loadChildren: () =>
          import("./recipes/recipedetail/recipedetail.module").then(
            (m) => m.RecipedetailPageModule
          ),

      },
      
    ],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
