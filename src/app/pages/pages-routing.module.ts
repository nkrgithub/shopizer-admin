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
      loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'orders',
      // canActivate: [OrdersGuard],
      loadChildren: () => import('../pages/orders/orders.module').then(m => m.OrdersModule),
    },
    {
      path: 'user-management',
      loadChildren: () => import('../pages/user-management/user-management.module').then(m => m.UserManagementModule),
    },
    {
      path: 'store-management',
      loadChildren: () => import('../pages/store-management/store-management.module').then(m => m.StoreManagementModule),
    },
    {
      path: 'catalogue',
      canActivate: [SuperadminStoreRetailCatalogueGuard],
      loadChildren: () => import('../pages/catalogue/catalogue.module').then(m => m.CatalogueModule),
    },
    {
      path: 'content',
      loadChildren: () => import('../pages/content/content.module').then(m => m.ContentModule),
    },
    {
      path: 'shipping',
      loadChildren: () => import('../pages/shipping/shipping.module').then(m => m.ShippingModule),
    },
    {
      path: 'payment',
      loadChildren: () => import('../pages/payment/payment.module').then(m => m.PaymentModule),
    },
    {
      path: 'tax-management',
      loadChildren: () => import('../pages/tax-management/tax-management.module').then(m => m.TaxManagementModule),
    },
    {
      path: 'customer',
      loadChildren: () => import('../pages/customers/customer.module').then(m => m.CustomersModule),
    },
    {
      path: 'error-500',
      component: FiveHundredComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
