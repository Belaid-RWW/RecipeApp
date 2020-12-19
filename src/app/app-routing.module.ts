import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
  path: "",
  redirectTo: "recipes",
  pathMatch: "full",
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
  import("./recipes/recipe-detail/recipe-detail.module").then(
  (m) => m.RecipeDetailPageModule
  ),
  },
  ],
  },
  {
    path: 'liste-client',
    loadChildren: () => import('./liste-client/liste-client.module').then( m => m.ListeClientPageModule)
  },
  {
    path: 'modalpopup',
    loadChildren: () => import('./modalpopup/modalpopup.module').then( m => m.ModalpopupPageModule)
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
