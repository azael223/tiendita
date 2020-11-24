import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreFirstGuard } from './store-first.guard';
import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './store/store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/store/checkout/checkout.component';

const routes: Routes = [
  { path: 'store',
    component: StoreComponent,
    canActivate: [StoreFirstGuard] },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'cart',
    component: CartDetailComponent,
    canActivate: [StoreFirstGuard],
  },
  { path: '**', redirectTo: '/store', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
