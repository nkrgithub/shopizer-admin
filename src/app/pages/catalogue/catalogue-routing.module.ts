import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogueComponent } from './catalogue.component';
import { MarketplaceGuard } from '../shared/guards/marketplace.guard';

const routes: Routes = [{
  path: '',
  component: CatalogueComponent,
  children: [
    {
      path: 'categories',
      canActivate: [MarketplaceGuard],
      //loadChildren: 'app/pages/catalogue/categories/categories.module#CategoriesModule'
      loadChildren: () => import('../catalogue/categories/categories.module').then(x => x.CategoriesModule)
    },
    {
      path: 'products',
      //loadChildren: 'app/pages/catalogue/products/products.module#ProductsModule'
      loadChildren: () => import('../catalogue/products/products.module').then(x => x.ProductsModule)
    },
    {
      path: 'brands',
      //loadChildren: 'app/pages/catalogue/brands/brands.module#BrandsModule'
      loadChildren: () => import('../catalogue/brands/brands.module').then(x => x.BrandsModule)
    },
    {
      path: 'catalogues',
      //loadChildren: 'app/pages/catalogue/catalogues/catalogues.module#CataloguesModule'
      loadChildren: () => import('../catalogue/brands/brands.module').then(x => x.BrandsModule)
    },
    {
      path: 'products-groups',
      //loadChildren: 'app/pages/catalogue/products-groups/products-groups.module#ProductsGroupsModule'
      loadChildren: () => import('../catalogue/products-groups/products-groups.module').then(x => x.ProductsGroupsModule)
    },
    {
      path: 'options',
      //loadChildren: 'app/pages/catalogue/options/options.module#OptionsModule'
      loadChildren: () => import('../catalogue/options/options.module').then(x => x.OptionsModule)
    },
    {
      path: 'types',
      //loadChildren: 'app/pages/catalogue/types/types.module#TypesModule'
      loadChildren: () => import('../catalogue/types/types.module').then(x => x.TypesModule)
    },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule {
}
