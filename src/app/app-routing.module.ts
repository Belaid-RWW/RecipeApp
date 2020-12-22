import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


  const routes: Routes = [
   
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    children:[
      {
        path:"",
        loadChildren: () => 
          import('./recipes/recipes.module').then( m => m.RecipesPageModule),
      },
      {
        path:":recipeId",
        loadChildren:() =>
        import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule),
      },
    ],
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
