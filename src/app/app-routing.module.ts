import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'manage',
    loadChildren: () => import('./pages/manage/manage.module').then( m => m.ManagePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'history/:id',
    loadChildren: () => import('./pages/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'restock',
    loadChildren: () => import('./pages/restock/restock.module').then( m => m.RestockPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./pages/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
