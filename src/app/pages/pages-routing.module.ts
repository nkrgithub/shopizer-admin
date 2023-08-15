import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { FiveHundredComponent } from './shared/components/five-hundred/five-hundred.component';
import { OrdersGuard } from './shared/guards/orders.guard';
import { SuperadminStoreRetailCatalogueGuard } from './shared/guards/superadmin-store-retail-catalogue.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      //loadChildren: 'app/pages/home/home.module#HomeModule'
      loadChildren: () => import('../pages/home/home-routing.module').then(x => x.HomeRoutingModule)

    },
    {
      path: 'orders',
      // canActivate: [OrdersGuard],
      // loadChildren: 'app/pages/orders/orders.module#OrdersModule'
      loadChildren: () => import('../pages/orders/orders.module').then(x => x.OrdersModule)

    },
    {
      path: 'user-management',
      //loadChildren: 'app/pages/user-management/user-management.module#UserManagementModule'
      loadChildren: () => import('../pages/user-management/user-management.module').then(x => x.UserManagementModule)
    },
    {
      path: 'store-management',
      //loadChildren: 'app/pages/store-management/store-management.module#StoreManagementModule'
      loadChildren: () => import('../pages/store-management/store-management.module').then(x => x.StoreManagementModule)
    },
    {
      path: 'catalogue',
      canActivate: [SuperadminStoreRetailCatalogueGuard],
      //loadChildren: 'app/pages/catalogue/catalogue.module#CatalogueModule'
      loadChildren: () => import('../pages/catalogue/catalogue.module').then(x => x.CatalogueModule)
    },
    {
      path: 'content',
      //loadChildren: 'app/pages/content/content.module#ContentModule'
      loadChildren: () => import('../pages/content/content.module').then(x => x.ContentModule)
    },
    {
      path: 'shipping',
      //loadChildren: 'app/pages/shipping/shipping.module#ShippingModule'
      loadChildren: () => import('../pages/shipping/shipping.module').then(x => x.ShippingModule)
    },
    {
      path: 'payment',
      //loadChildren: 'app/pages/payment/payment.module#PaymentModule'
      loadChildren: () => import('../pages/payment/payment.module').then(x => x.PaymentModule)
    },
    {
      path: 'tax-management',
      //loadChildren: 'app/pages/tax-management/tax-management.module#TaxManagementModule'
      loadChildren: () => import('../pages/tax-management/tax-management.module').then(x => x.TaxManagementModule)
    },
    {
      path: 'customer',
      //loadChildren: 'app/pages/customers/customer.module#CustomersModule'
      loadChildren: () => import('../pages/customers/customer.module').then(x => x.CustomersModule)
    },
    {
      path: 'error-500',
      component: FiveHundredComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
