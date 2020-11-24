import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../models/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartDetailComponent,
    CheckoutComponent,
    CartSummaryComponent,
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
